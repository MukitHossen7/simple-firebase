import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .error(() => {
        console.log("Error signing out");
      });
  };
  return (
    <div className="mt-10 flex flex-col items-center">
      {user ? (
        <button className="btn" onClick={handleLogOut}>
          signOut
        </button>
      ) : (
        <div>
          <button onClick={handleLoginWithGoogle} className="btn mr-2">
            LogIn with Google
          </button>
          <button className="btn" onClick={handleLoginWithGithub}>
            LogIn with Github
          </button>
        </div>
      )}
      {user && (
        <div className="border-2 border-sky-400 p-5 rounded-xl m-4">
          <h3 className="font-bold text-xl">Welcome, {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL}
            className="w-28 h-28 object-cover mt-3 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
