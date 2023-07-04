import {
  GoogleBtn,
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "@/components/user.component";
import {useEffect, useState} from "react";
import { Suspense } from 'react';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div
    >
      <div>
        <LoginButton />
        {/*<RegisterButton />*/}
        <LogoutButton />
        <GoogleBtn/>
        {/*<ProfileButton />*/}

        <h1>Server Session</h1>
        {
          session && <div>{JSON.stringify(session)}</div>
        }
        <Suspense fallback={<p>Loading feed...</p>}>
        <User />
        </Suspense>
      </div>
    </div>
  );
}
