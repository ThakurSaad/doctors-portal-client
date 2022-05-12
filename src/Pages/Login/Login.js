import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log("USER", user);
  }
  if (loading) {
    console.log("LOADING", loading);
  }
  if (error) {
    console.log(error);
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">Login</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label py-0">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="divider">OR</div>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline uppercase"
          >
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
