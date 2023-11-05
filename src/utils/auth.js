import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prisma from "./connect"
import { getServerSession } from "next-auth";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET
}
export const getAuthSession = () => getServerSession(authOptions);