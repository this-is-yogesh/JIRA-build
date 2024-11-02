import React from "react";
import { SignInButton, SignedOut } from "@clerk/nextjs";

const SignUp = () => {
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
};

export default SignUp;
