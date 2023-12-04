import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import OrangeButton from "../../../components/button/orangeButton/button";
import toast from "react-hot-toast";
import Loading from "../../../components/SVGS/loading";
import { useAccount } from "wagmi";
interface IFormInput {
  _id: string;
  email: string;
  name: string;
  review: string;
  rating: number;
}

const GameReviewForm = () => {
  const gameSlugData = useSelector((state: RootState) => state.gameSlugData);
  const { connector: activeConnector, isConnected, address } = useAccount();

  const [submitted, setSubmitted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication status
  const [isLoading, setIsLoading] = useState(false);

  // Check for authentication cookie when component mounts
  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");
    if (sessionToken) {
      setAuthenticated(true);
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    // data.rating = parseInt(data?.rating); // or parseFloat(data.rating) if rating can be a decimal number
    setIsLoading(true); // Set loading state to true when form submission begins

    data.rating = parseInt(data.rating as unknown as string, 10);

    fetch("/api/createReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          toast.success("Your review has been submitted!");
        } else {
          setSubmitted(false);
          toast.error("Failed to submit review. Please try again later.");
          setIsLoading(false); // Reset loading state to false after form submission is complete
        }
      })
      .catch((err) => {
        console.error(err);
        setSubmitted(false);
        toast.error("Failed to submit review. Please try again later.");
        setIsLoading(false); // Reset loading state to false after form submission is complete
      });
    // console.log(data);
  };
  return (
    <div className={styles.formDiv}>
      {authenticated && isConnected === true ? (
        <div>
          {submitted ? (
            <div className="flex flex-col max-w-2xl px-10 py-10 mx-auto my-10 text-white bg-yellow-500">
              <h3 className="text-3xl font-bold">
                Your review has been submitted!
              </h3>
              <p> Once it has been approved, it will appear below</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.formBody} flex flex-col max-w-2xl p-3 mx-auto `}
            >
              <input
                {...register("_id")}
                type="hidden"
                // name="_id"
                value={gameSlugData?._id}
              />

              <label className="block mb-5">
                <span className="text-gray-700"> Name </span>
                <input
                  {...register("name", { required: true })}
                  className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500"> The Name is required</span>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700"> Email </span>
                <input
                  {...register("email", { required: true })}
                  className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
                  placeholder="Email"
                  type="email"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gray-700"> review </span>
                <textarea
                  {...register("review", { required: true })}
                  className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-textarea ring-yellow-500 focus:ring"
                  placeholder="review"
                  rows={8}
                />
                {errors.review && (
                  <span className="text-red-500"> The review is required</span>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gray-700"> review </span>
                <input
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 0, message: "Rating must be at least 0" },
                    max: { value: 10, message: "Rating must be at most 10" },
                    pattern: {
                      value: /^\d+$/,
                      message: "Rating must be a number",
                    },
                  })}
                  className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-textarea ring-yellow-500 focus:ring"
                  placeholder="rating"
                  type="number"
                />
                {errors.rating && (
                  <span className="text-red-500">{errors.rating.message}</span>
                )}
              </label>

              {/* errors will return when field validation fails */}
              <div className="flex flex-col p-2"></div>

              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                {isLoading ? (
                  <div>
                    {<Loading />}
                    <input
                      type="submit"
                      className="px-4 py-2 font-bold text-white bg-black rounded shadow cursor-pointer hover:bg-yellow-400 focus:shadow-outline focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <input
                      type="submit"
                      className="px-4 py-2 font-bold text-white bg-black rounded shadow cursor-pointer hover:bg-yellow-400 focus:shadow-outline focus:outline-none"
                    />
                  </div>
                )}

                <button
                  type="button"
                  className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div>
          {/* // Render a message or redirect to login page if the user is not
          authenticated */}
          <div className={styles.reviewBtn}>
            Please{" "}
            <a href="#" data-hs-overlay="#hs-large-modal">
              login
            </a>{" "}
            to submit a review.
            <br />
            <OrangeButton>
              <a href="#" data-hs-overlay="#hs-large-modal">
                Login
              </a>{" "}
            </OrangeButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameReviewForm;
