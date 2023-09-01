import React from 'react';
import { Form } from 'react-router-dom';

// Import Icons
import ShowPassword from '/src/images/show.svg';

// Import functions
import { handleRevealPassword } from '../../apis/showPassword';

const Login = ({ updateUserStage }) => {
  const requiredStar = <span className="text-[#E53F3F]">*</span>;
  return (
    <div>
      <h1 className="text-2xl text-black font-semibold mb-3.5 text-center">
        Login to your account
      </h1>
      <Form method="post" className="mx-4">
        <label htmlFor="userEmail" className="inputLabel" aria-required>
          E-mail ID {requiredStar}
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="What's your email?"
          className="inputText"
          required
          autoComplete="on"
        />
        <label
          htmlFor="loginPassword"
          className="inputLabel mb-2"
          aria-required
        >
          Password {requiredStar}
        </label>
        <div className="flex flex-between justify-start items-center inputPassword">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            // pattern="[0-9a-fA-F]"
            placeholder="********"
            required
            className="outline-none w-full"
            minLength={8}
            maxLength={18}
            autoComplete="on"
          />
          <img
            src={ShowPassword}
            alt="ShowPass"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={(e) => handleRevealPassword(e, 'loginPassword')}
          />
        </div>

        {/* Submit */}
        <div className="w-full grid place-items-center my-8">
          <button
            type="submit"
            id="submit"
            name="intent"
            value="login"
            className="primaryButton active:bg-positive"
          >
            Login
          </button>
        </div>
      </Form>
      <p className="text-[15px] font-normal text-black text-center w-full hover:scale-110 transition-transform">
        Using WanderUs for the first time?
        <a
          className="pl-2 text-[#111E96] font-semibold block cursor-pointer hover:underline"
          onClick={() => {
            updateUserStage('signup');
          }}
        >
          Create a new account
        </a>
      </p>
    </div>
  );
};

export default Login;
