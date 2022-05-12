import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">Login</h2>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "error message",
                },
              })}
            />
            <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>
          <div className="divider">OR</div>
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
