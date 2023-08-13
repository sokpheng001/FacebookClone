import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function LoginWithGoogleButton() {
  return (
    <button className="rounded-lg border-2 border-black p-2 flex gap-2 w-52 justify-center">
      <FcGoogle className="mt-1" />
      <p className="text-center">Login with google</p>
    </button>
  );
}
