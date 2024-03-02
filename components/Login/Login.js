import { useSession, signIn, signOut } from "next-auth/react";
import Icon from "../Icons";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
     <>
         Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

