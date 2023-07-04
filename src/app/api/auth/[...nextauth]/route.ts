import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {userSignin} from "@/app/axios/authApi"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: any = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  site: process.env.NEXTAUTH_URL,
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  redirect: false,
  providers: [
    FacebookProvider({
      clientId: "653450673362045",
      clientSecret: "28ada26843cd00c2c33187f41e4df675"
    }),
   ],
  pages: {
    signIn: '/auth/signin',
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
