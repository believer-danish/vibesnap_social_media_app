import { useNavigate } from "react-router";
import {
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  google,
  vibesnap,
} from "../utils/data";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const handleAuthentication = () => {
    const provider = new GoogleAuthProvider();

    console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("sign in successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[100svh] overflow-hidden  flex flex-col lg:flex-row justify-center items-center   gap-4 ">
      {/* Photo gallery */}
      <div className="grid  gap-4 grid-cols-3 w-full max-w-[600px] ">
        <div className="flex  flex-col gap-4">
          <img src={l1} alt="image" className="aspect-[1/1.8]" />
          <img src={l2} alt="image" className="aspect-[1/1.8]" />
          <img src={l3} alt="image" className="aspect-[1/1.8]" />
        </div>
        <div className="flex  flex-col gap-4 ">
          <img src={l4} alt="image" className="" />
          <img src={l5} alt="image" className="aspect-[1/1.8]" />
          <img src={l6} alt="image" className="aspect-[1/1.8]" />
        </div>
        <div className="flex  flex-col gap-4">
          <img src={l7} alt="image" className="aspect-[1/1.8]" />
          <img src={l8} alt="image" className="aspect-[1/1.8]" />
          <img src={l9} alt="image" className="aspect-[1/1.8]" />
        </div>
      </div>

      {/* Google sign in */}
      <div
        className=" bg-white  lg:bg-slate-200 relative  z-10  max-lg:-top-36  w-full max-w-xl
       flex gap-8 p items-center justify-start flex-col rounded-[64px] p-9  "
      >
        <div>
          <h1 className="flex gap-2 justify-center items-center">
            <img src={vibesnap} alt="logo" className="w-12 h-9" />
            <span className="text-3xl font-semibold">Vibesnap</span>
          </h1>
          <h2 className="[font-family:'Kumbh_Sans']">
            Moments That Matter, Shared Forever.
          </h2>
        </div>

        <div
          onClick={handleAuthentication}
          className="flex gap-4 bg-[#292929] px-6 py-4 rounded-3xl cursor-pointer"
        >
          <img src={google} alt="google logo" className="w-5 h-5" />
          <h1 className="text-white font-bold ">Continue with Google</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
