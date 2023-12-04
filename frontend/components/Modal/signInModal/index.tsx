import React, { useEffect } from "react";
import styles from "./SignInPopUp.module.css";
import Image from "next/image";
import { db } from "../../../firebase";
import { toast, Toaster } from "react-hot-toast";
import {
  collection,
  where,
  query,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { useAccount, useConnect, useSignMessage, useNetwork } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { useState } from "react";
import Metamask from "../../../media/svg/metamast.svg";
import Loading from "../../SVGS/loading";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Cookies from "js-cookie";
import { signIn, useSession } from "next-auth/react";
import { useIconData } from "../../icons";
import Link from "next/link";
export default function SignInModalBody() {
  const { isLoading } = useConnect();
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  const { connector: activeConnector, isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  // const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [gloading, setGloading] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication status
  const { icons } = useIconData();

  //moralis
  const { chain } = useNetwork();
  const { status } = useSession();

  // console.log("chain", chain);
  // console.log("status", status);
  // console.log("isConnected", isConnected);

  const isAddress = address || null;
  const chainId = chain?.id || null;
  // Check for authentication cookie when component mounts
  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");
    if (sessionToken) {
      setAuthenticated(true);
    }
  }, []);
  // useEffect to close the modal when isMetaMaskConnected becomes true
  useEffect(() => {
    if (isConnected) {
      const modal = document.getElementById("hs-large-modal");
      if (modal) {
        modal.click();
      }
    }
  }, [isConnected]);

  function generateUsername() {
    // List of adjectives and nouns to create a random username
    const adjectives = [
      "happy",
      "clever",
      "brave",
      "silly",
      "witty",
      "playful",
      "daring",
      "cool",
      "fierce",
      "kind",
    ];
    const nouns = [
      "panda",
      "tiger",
      "dragon",
      "unicorn",
      "wolf",
      "eagle",
      "lion",
      "bear",
      "fox",
      "rabbit",
    ];

    // Generate a random username using a combination of an adjective and a noun
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const username = `${adjective.charAt(0).toUpperCase()}${adjective.slice(
      1
    )}${noun.charAt(0).toUpperCase()}${noun.slice(1)}`;

    // Add a random number at the end to make the username unique
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${username}${randomNumber}`;
  }

  useEffect(() => {
    const handleAuth = async () => {
      setLoading(true);
      setIsSigningIn(true);
      const response = await requestChallengeAsync({
        address: isAddress ?? "",
        chainId: chainId ?? "",
      });

      // Use nullish coalescing to provide a default message if it's undefined
      const message: string = response?.message ?? "Default Message";

      const signature = await signMessageAsync({ message });

      try {
        // Sign in the user and get the ID token from Firebase Authentication
        const response: any =
          (await signIn("moralis-auth", {
            message,
            signature,
            redirect: false,
            // callbackUrl: "/home",
          })) ?? {}; // Provide an empty object as the default value if response is undefined

        // Set a session cookie with the Firebase ID token using js-cookie
        Cookies.set("sessionToken", response?.idToken, {
          expires: 30, // Cookie expiration in days (e.g., 30 days)
          path: "/", // The path where the cookie is accessible
          secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          sameSite: "lax", // Set to 'lax' for same-site cookie behavior
        });

        const userData = { address, chainId };
        const generatedUsername = generateUsername();

        addToDatabase(userData.address, generatedUsername, null);
        // Update connection status after successful login
        setIsMetaMaskConnected(true);
        // Close the modal after successful login
        const modal = document.getElementById("hs-large-modal");

        if (modal) {
          modal.style.display = "hs-large-modal";
        }
        // Reload the page after successful login (without making it obvious to the user)
        window.location.reload();
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsSigningIn(false); // Stop signing in, regardless of success or failure
        setLoading(false); // Stop loading regardless of success or failure
      }
    };
    if (!authenticated && isConnected === false && isAddress) {
      handleAuth();
    }
  }, [status, isConnected]);

  async function addToDatabase(
    address: unknown,
    username: string,
    email: null
  ) {
    console.log(address);
    const q = query(collection(db, "users"), where("wallet", "==", address));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      try {
        const collectionRef = collection(db, "users");
        const docRef = await addDoc(collectionRef, {
          name: username,
          email: email,
          wallet: address,
          points: 0,
          loggedin: true,
          photo_url:
            "https://res.cloudinary.com/df9jrkngw/image/upload/v1683649951/kn2oueda6og3jv3sx7uh.jpg",
          timestamp: serverTimestamp(),
          mxs_current_watchout: 0,
          mxs_current_shadow_syndicate: 0,
          mxs_current_seeker: 0,
          mxs_current_defi_gravity: 0,
          mxs_current_operation_satoshi: 0,
          mxs_total_watchout: 0,
          mxs_total_shadow_syndicate: 0,
          mxs_total_seeker: 0,
          mxs_total_defi_gravity: 0,
          mxs_total_operation_satoshi: 0,
          total_playtime_watchout: 0,
          total_playtime_shadow_syndicate: 0,
          total_playtime_seeker: 0,
          total_playtime_defi_gravity: 0,
          total_playtime_operation_satoshi: 0,
          levels_played_watchout: 0,
          levels_played_shadow_syndicate: 0,
          levels_played_seeker: 0,
          levels_played_defi_gravity: 0,
          levels_played_operation_satoshi: 0,
          last_logout_watchout: 0,
          last_logout_shadow_syndicate: 0,
          last_logout_seeker: 0,
          last_logout_defi_gravity: 0,
          last_logout_operation_satoshi: 0,
        }).then(() => {
          //redirect to electron app
          // if (window !== undefined) {
          //   window.location.href = "electron-fiddle://" + address;
          // }
        });
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong saving your info. Try Again.");
      }
    } else {
      if (window !== undefined) {
        window.location.href = "electron-fiddle://" + address;
        setLoading(false);
        setGloading(false);
      }
      setLoading(false);
      setGloading(false);
      toast("Loggin you in!", {
        icon: "👏",
      });
    }
  }

  return (
    <div id={isConnected === true ? "hs-large-modal" : ""}>
      <div
        id="hs-large-modal"
        className={`${styles.SignInPopUp}  hs-overlay hidden h-full fixed top-0 left-0 z-[60] `}
      >
        <div
          className={`${styles.signUp_Overlay}
          
          hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:w-full m-3 lg:mx-auto`}
        >
          <div className={styles.close_icons}>
            {icons?.cancelIcon?.url ? (
              <Image
                src={
                  icons?.cancelIcon.url != undefined
                    ? icons?.cancelIcon?.url
                    : "#"
                }
                alt=""
                width={100}
                height={100}
                data-hs-overlay="#hs-large-modal"
              />
            ) : (
              ""
            )}
          </div>
          <div
            className={`${styles.SignInPopUp_bg}  flex flex-col border shadow-sm rounded-xl dark:border-gray-700 dark:shadow-slate-700/[.7]`}
          >
            <div className={`${styles.signInBody}  p-4 `}>
              <div>
                {isMetaMaskConnected && (
                  <div className={styles.connectedUser}>
                    <p>Connected Wallet Address: {address}</p>
                    {/* <button onClick={disconnectAsync}>Disconnect</button> */}
                  </div>
                )}

                {!isMetaMaskConnected && (
                  <div className={styles.flex_SignIn}>
                    <div className={styles.flex_SignIn_btn}></div>
                  </div>
                )}
              </div>
              <div>
                <main>
                  <Toaster />
                  <div className={`${styles.flex_SignIn}  `}>
                    <h1>Connect</h1>
                    <hr />
                    <p>Log in by connecting your wallet.</p>
                    <div className={styles.flex_SignIn_btn}>
                      <Image
                        src={Metamask}
                        alt="Your Image"
                        className="object-cover w-full"
                      />
                      <div className={styles.flex_SignIn_wallet}>
                        {isLoading ? (
                          <button type="button" disabled>
                            <Loading />
                            Loading
                          </button>
                        ) : (
                          <div>
                            <ConnectButton />
                          </div>
                        )}
                      </div>
                    </div>
                    <hr />
                    <p>Haven’t got a crypto wallet yet?</p>
                    <Link href="https://metamask.io/faqs/">
                      <div className={styles.connect_wallet}>
                        <h4>Learn how to connect</h4>{" "}
                        {icons?.arrowIcon?.url ? (
                          <Image
                            src={
                              icons?.arrowIcon.url != undefined
                                ? icons?.arrowIcon?.url
                                : "#"
                            }
                            alt=""
                            width={100}
                            height={100}
                          />
                        ) : (
                          ""
                        )}
                      </div>{" "}
                    </Link>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
