import React from 'react';
import { Form } from 'react-router-dom';

// Import Icons
import ShowPassword from '/src/images/show.svg';

// Import functions
import { handleRevealPassword } from '../../apis/showPassword';

const NewUser = ({ updateUserStage }) => {
  const requiredStar = <span className="text-[#E53F3F]">*</span>;
  return (
    <div>
      <h1 className="text-2xl text-black font-semibold mb-3.5 text-center">
        Create Account
      </h1>
      <Form method="post" className="mx-4">
        <label htmlFor="username" className="inputLabel" aria-required>
          Name {requiredStar}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="What do we call you?"
          required
          className="inputText"
        />
        <label htmlFor="userEmailSignUp" className="inputLabel">
          E-mail ID {requiredStar}
        </label>
        <input
          type="email"
          name="userEmailSignUp"
          id="userEmailSignUp"
          placeholder="What's your email?"
          className="inputText"
          required
        />
        <label
          htmlFor="signUpPassword"
          className="inputLabel mb-2"
          aria-required
        >
          Password {requiredStar}
        </label>
        <div className="flex flex-between justify-start items-center inputPassword">
          <input
            type="password"
            name="signUpPassword"
            id="signUpPassword"
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
            onClick={(e) => handleRevealPassword(e, 'signUpPassword')}
          />
        </div>

        {/* Terms and conditions */}
        <div className="mt-3.5">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            className="mr-2"
            required
          />
          <label htmlFor="acceptTerms" className="text-sm">
            I agree to all Terms and Conditions
          </label>
        </div>

        {/* Submit */}
        <div className="w-full grid place-items-center my-8">
          <button
            type="submit"
            id="submit"
            name="intent"
            value="signup"
            className="primaryButton active:bg-positive"
          >
            Sign Up
          </button>
        </div>
      </Form>
      <p className="text-[15px] font-normal text-black text-center w-full">
        Already have an account?{' '}
        <a
          className="pl-1 text-[#111E96] font-semibold cursor-pointer hover:underline hover:scale-110 transition-transform "
          onClick={() => {
            updateUserStage('login');
          }}
        >
          Sign in
        </a>
      </p>
    </div>
  );
};

export default NewUser;
