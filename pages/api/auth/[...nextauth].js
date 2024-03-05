import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username1234" },
        password: { label: "Password", type: "password", placeholder: "password1234" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "fish" &&
          credentials.password === "fish"
        ) {
          return {
            name: "Neuer Fisch",
            email: "test@example.com",
          };
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
