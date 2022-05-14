import React, { useEffect } from "react";
import {
  // useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // const [sendPasswordResetEmail, sending, resetError] =
  //   useSendPasswordResetEmail(auth);
  let singInError;
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (gUser || user) {
      navigate(from, { replace: true });
      toast("Welcome back");
    }
  }, [gUser, user, from, navigate]);
  if (gLoading || loading) {
    return <Loading></Loading>;
  }
  if (gError || error) {
    singInError = (
      <p className="text-red-500 text-sm px-1 pb-2">
        {error?.message || gError?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const emailChange = (event) => {
    console.log("typed");
  };

  const handleResetPass = async () => {
    // console.log(event.target.value);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                onChange={emailChange}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters long or higher",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {singInError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="LOGIN"
            />
          </form>
          <p className="text-center p-1">
            <small>
              New To Doctors Portal ?{" "}
              <Link to="/signup" className="text-primary font-semibold">
                Create new account
              </Link>
            </small>
          </p>
          <p className="text-center">
            <small>
              Forgotten password ?{" "}
              <button
                onClick={handleResetPass}
                className="text-primary font-semibold"
              >
                Reset
              </button>
            </small>
          </p>
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
