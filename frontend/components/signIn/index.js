// import Image from "next/image";
// import { auth, provider, db } from "../../firebase";
// import { signInWithPopup } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";
// import Cookies from "js-cookie";
// import { createWallet } from "../../utils/createWallet";
// import { ethers } from "ethers";
// import {
//   collection,
//   where,
//   query,
//   doc,
//   updateDoc,
//   addDoc,
//   serverTimestamp,
//   getDocs,
// } from "firebase/firestore";
// import { signIn } from "next-auth/react";
// import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
// import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import styles from "./signIn.module.css";
// import { useState } from "react";
// import Metamask from "../SVGS/metamask";
// import Loading from "../SVGS/loading";

// export default function SignInPopUp() {
//   const { connectAsync } = useConnect();
//   const { disconnectAsync } = useDisconnect();
//   const { isConnected } = useAccount();
//   const { signMessageAsync } = useSignMessage();
//   const { requestChallengeAsync } = useAuthRequestChallengeEvm();
//   const [address, setAddress] = useState();
//   const [loading, setLoading] = useState(false);
//   const [gloading, setGloading] = useState(false);

//   function generateUsername() {
//     // List of adjectives and nouns to create a random username
//     const adjectives = [
//       "happy",
//       "clever",
//       "brave",
//       "silly",
//       "witty",
//       "playful",
//       "daring",
//       "cool",
//       "fierce",
//       "kind",
//     ];
//     const nouns = [
//       "panda",
//       "tiger",
//       "dragon",
//       "unicorn",
//       "wolf",
//       "eagle",
//       "lion",
//       "bear",
//       "fox",
//       "rabbit",
//     ];

//     // Generate a random username using a combination of an adjective and a noun
//     const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//     const noun = nouns[Math.floor(Math.random() * nouns.length)];
//     const username = `${adjective.charAt(0).toUpperCase()}${adjective.slice(
//       1
//     )}${noun.charAt(0).toUpperCase()}${noun.slice(1)}`;

//     // Add a random number at the end to make the username unique
//     const randomNumber = Math.floor(Math.random() * 1000);
//     return `${username}${randomNumber}`;
//   }

//   const handleAuth = async () => {
//     setLoading(true);
//     if (isConnected) {
//       await disconnectAsync();
//     }
//     const { account, chain } = await connectAsync({
//       connector: new MetaMaskConnector(),
//     });
//     const { message } = await requestChallengeAsync({
//       address: account,
//       chainId: chain.id,
//     });
//     const signature = await signMessageAsync({ message });

//     try {
//       // Sign in the user and get the ID token from Firebase Authentication
//       const response = await signIn("moralis-auth", {
//         message,
//         signature,
//         redirect: false,
//         // callbackUrl: "/home",
//       });

//       // Set a session cookie with the Firebase ID token using js-cookie
//       Cookies.set("sessionToken", response.idToken, {
//         expires: 30, // Cookie expiration in days (e.g., 30 days)
//         path: "/", // The path where the cookie is accessible
//         secure: process.env.NODE_ENV === "production", // Use secure cookies in production
//         sameSite: "lax", // Set to 'lax' for same-site cookie behavior
//       });

//       const userData = { address: account, chainId: chain.id };
//       const generatedUsername = generateUsername();
//       console.log("userData", userData);

//       addToDatabase(userData.address, generatedUsername, null);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   async function addToDatabase(address, username, email) {
//     console.log(address);
//     const q = query(collection(db, "users"), where("wallet", "==", address));
//     const querySnapshot = await getDocs(q);
//     if (querySnapshot.empty) {
//       try {
//         const collectionRef = collection(db, "users");
//         const docRef = await addDoc(collectionRef, {
//           name: username,
//           email: email,
//           wallet: address,
//           points: 0,
//           loggedin: true,
//           photo_url:
//             "https://res.cloudinary.com/df9jrkngw/image/upload/v1683649951/kn2oueda6og3jv3sx7uh.jpg",
//           timestamp: serverTimestamp(),
//           mxs_current_watchout: 0,
//           mxs_current_shadow_syndicate: 0,
//           mxs_current_seeker: 0,
//           mxs_current_defi_gravity: 0,
//           mxs_current_operation_satoshi: 0,
//           mxs_total_watchout: 0,
//           mxs_total_shadow_syndicate: 0,
//           mxs_total_seeker: 0,
//           mxs_total_defi_gravity: 0,
//           mxs_total_operation_satoshi: 0,
//           total_playtime_watchout: 0,
//           total_playtime_shadow_syndicate: 0,
//           total_playtime_seeker: 0,
//           total_playtime_defi_gravity: 0,
//           total_playtime_operation_satoshi: 0,
//           levels_played_watchout: 0,
//           levels_played_shadow_syndicate: 0,
//           levels_played_seeker: 0,
//           levels_played_defi_gravity: 0,
//           levels_played_operation_satoshi: 0,
//           last_logout_watchout: 0,
//           last_logout_shadow_syndicate: 0,
//           last_logout_seeker: 0,
//           last_logout_defi_gravity: 0,
//           last_logout_operation_satoshi: 0,
//         }).then(() => {
//           //redirect to electron app
//           // if (window !== undefined) {
//           //   window.location.href = "electron-fiddle://" + address;
//           // }
//         });
//       } catch (error) {
//         console.log(error);
//         toast.error("Something went wrong saving your info. Try Again.");
//       }
//     } else {
//       if (window !== undefined) {
//         window.location.href = "electron-fiddle://" + address;
//         setLoading(false);
//         setGloading(false);
//       }
//       setLoading(false);
//       setGloading(false);
//       toast("Loggin you in!", {
//         icon: "👏",
//       });
//     }
//   }

//   return (
//     <>
//       <main>
//         <Toaster />
//         <div className={`${styles.flex_SignIn}  `}>
//           <div className={styles.flex_SignIn_btn}>
//             <img
//               src="https://res.cloudinary.com/df9jrkngw/image/upload/v1691395440/mxs_banners_1080_1080_sbrtsi.png"
//               alt="Your Image"
//               className="object-cover w-full"
//             />
//             <div className={styles.flex_SignIn_wallet}>
//               {loading ? (
//                 <button type="button" disabled>
//                   <Loading />
//                   Loading
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   // disabled={bothloading}
//                   onClick={handleAuth}
//                 >
//                   <Metamask />
//                   Sign in with MetaMask
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
