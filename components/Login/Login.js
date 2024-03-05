import styled from "styled-components";
import Icon from "../Icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <StyledLoginButton onClick={() => signOut()}>
          <Icon
                variant={"user"}
                size={30}
                strokeWidth={0.1}
                color={"var(--primary-color)"}
              />
          </StyledLoginButton>
              <StyledIconName color={"var(--primary-color)"}>Logout</StyledIconName>
          </>
    );
  }
  return (
    <>
     <StyledLoginButton onClick={() => signIn()}>
            <Icon
                variant={"user"}
                size={30}
                strokeWidth={0.1}
                color={"var(--primary-color)"}
              />
      </StyledLoginButton>
              <StyledIconName color={"var(--primary-color)"}>Login</StyledIconName>
      </>
  );
}

const StyledIconName = styled.div`
text-decoration: none;
margin-top: -7px;
font-weight: 300;
font-size: 10px;
color: ${({ color }) => color};
`;

const StyledLoginButton = styled.button`
border-style: none;
background-color: transparent;
font-size: 10px;
`