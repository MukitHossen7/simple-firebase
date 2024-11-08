import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-10 flex flex-col items-center">
      <button onClick={handleLoginWithGoogle} className="btn">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
