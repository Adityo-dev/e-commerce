import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff]">
      <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
        <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">
          Hey! <br /> Welcome to
          <br /> Happy Shopping
        </h1>
        <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
        <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
      </div>
      <form className="p-8 flex-1">
        <h1 className="text-4xl pb-4">Login</h1>
        <p>Please login using account detail bellow.</p>
        <div className="space-y-">
          <label htmlFor="email_" className="block mt-6 mb-2">
            Email
          </label>
          <input
            id="email_"
            type="email"
            placeholder="example@example.com"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md    invalid:border-red-700 valid:border-[#0095ff]"
          />
          <label htmlFor="password_" className="block mt-6 mb-2">
            Password
          </label>
          <input
            id="password_"
            type="password"
            placeholder=".............."
            min={5}
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md  invalid:border-red-700 valid:border-[#0095ff]"
          />
        </div>
        {/* button type will be submit for handling form submission*/}
        <div className="flex items-center justify-between ">
          <button
            type="button"
            className="py-2 px-10 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md  border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50"
          >
            Submit
          </button>
          <div className="mt-3 hover:text-[#589aca] hover:underline">
            <NavLink>Forgot your password?</NavLink>
          </div>
        </div>
        <div className="text-[1.2rem] hover:underline">
          <NavLink to="/CreateAccount">Create account</NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;