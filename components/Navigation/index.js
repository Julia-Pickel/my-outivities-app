import Link from "next/link";
import styled from "styled-components";
import Icon from "../Icons";
import { useRouter } from "next/router";
import Login from "../Login/Login";

export default function Navigation() {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <StyledNavigation>
        <StyledList>
          <li>
            <StyledLink href="/" onClick={handleHomeClick} $currentPage={
                router.pathname === "/"}>
              <Icon
                variant={"home"}
                size={30}
                strokeWidth={0.1}
                color={
                  router.pathname === "/"
                    ? "var(--third-color)"
                    : "var(--primary-color)"
                }
              />
              <StyledIconName color={router.pathname === "/" ? "var(--third-color)" : "var(--primary-color)"}>Explore</StyledIconName>
            </StyledLink>
            </li>
            <li>
            <StyledLink href="/favoriteList">
              <Icon
                variant={"noFavorite"}
                size={30}
                strokeWidth={0.1}
                color={
                  router.pathname === "/favoriteList"
                    ? "var(--third-color)"
                    : "var(--primary-color)"
                }
              />
              <StyledIconName color={router.pathname === "/favoriteList" ? "var(--third-color)" : "var(--primary-color)"}>Favorites</StyledIconName>
            </StyledLink>
            </li>
            <li>
            <StyledLink href="/create" $currentPage={
                router.pathname === "/create"}>
              <Icon
                variant={"plus"}
                size={30}
                strokeWidth={0.1}
                color={
                  router.pathname === "/create"
                    ? "var(--third-color)"
                    : "var(--primary-color)"
                }
              />
              <StyledIconName color={router.pathname === "/create" ? "var(--third-color)" : "var(--primary-color)"}>Create</StyledIconName>
            </StyledLink>
            </li>
            <li>
            <StyledLink href="/mapOverview" >
              <Icon
                variant={"map"}
                size={30}
                strokeWidth={0.1}
                color={
                  router.pathname === "/mapOverview"
                    ? "var(--third-color)"
                    : "var(--primary-color)"
                }
                />
            <StyledIconName color={router.pathname === "/mapOverview" ? "var(--third-color)" : "var(--primary-color)"}>Map</StyledIconName>
            </StyledLink>
            </li>
            <li>
              <Login />
            </li>
    </StyledList>
    </StyledNavigation>
  )          
}


const StyledNavigation = styled.nav`
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
  height: 50px;
  display: grid;
  z-index: 2;
  border-top: solid 1px var(--neutral-color);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 2px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIconName = styled.div`
text-decoration: none;
margin-top: -7px;
font-weight: 300;
font-size: 10px;
color: ${({ color }) => color};
`;

