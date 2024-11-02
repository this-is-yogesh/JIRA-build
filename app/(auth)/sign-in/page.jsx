import React from 'react'
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

const SignIn = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}

export default SignIn;