import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
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
        <button onClick={handleLoginWithGoogle} className="btn">
          Login with Google
        </button>
      )}
      {user && (
        <div className="border-2 border-sky-400 p-5 rounded-xl m-4">
          <h3 className="font-bold text-xl">Welcome, {user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} />
        </div>
      )}
    </div>
  );
};

export default Login;
