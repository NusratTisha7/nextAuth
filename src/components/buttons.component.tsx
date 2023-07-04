"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const GoogleBtn = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn('facebook')}>
      Facebook
    </button>
  );
};

export const FacebookBtn = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn('facebook')}>
      Facebook
    </button>
  );
};


export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
