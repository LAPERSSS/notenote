import EmailLogin from "@/components/login/EmailLogin";
import GithubLogin from "@/components/login/GithubLogin";
import GoogleLogin from "@/components/login/GoogleLogin";
import { signIn } from "next-auth/react";

const login = () => {
  return (
    <>
      <section className="flex justify-center h-screen items-center">
        <div className="shadow-xl bg-green-200 rounded-3xl w-96">
          <section className="m-5">
            <h3 className="flex flex-col my-3 font text-3xl mx-2">Sign In</h3>
            <EmailLogin />
            <h3 className="text-center">or</h3>
            <GoogleLogin />
            <GithubLogin />
            <h3 className="cursor-pointer text-center mt-4 hover:text-blue-500">
              Dont have an account?
            </h3>
          </section>
        </div>
      </section>
    </>
  );
};

export default login;
