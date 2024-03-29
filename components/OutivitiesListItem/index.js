import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icons";

export default function OutivitiesListItem({
  outivity,
  onToggleFavorite,
  isFavorite = true,
}) {
  return (
    <StyledOutivityCard>
      <Link href={`/${outivity._id}`}>
        <StyledImageContainer>
          <StyledOutivityImage
            src={outivity.image}
            alt={outivity.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </StyledImageContainer>
      </Link>

      <StyledOutivityTitle>{outivity.title}</StyledOutivityTitle>
      <StyledOutivityCityName>in {outivity.area}</StyledOutivityCityName>

      <StyledFavoriteButton
        type="button"
        onClick={() => onToggleFavorite(outivity._id)}
      >
        <Icon
          variant="favorite"
          aria-label="favorite"
          color={isFavorite ? "var(--favorite-color)" : "var(--neutral-color)"}
          size={"38"}
        />
      </StyledFavoriteButton>
    </StyledOutivityCard>
  );
}

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  overflow: hidden;
  margin: 0 auto;
`;

const StyledOutivityCard = styled.li`
  position: relative;
  place-content: center;
  max-width: 640px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--neutral-color) 0px 2px 1px, var(--neutral-color) 0px 4px 2px,
    var(--neutral-color) 0px 8px 4px, var(--neutral-color) 0px 16px 8px,
    var(--neutral-color) 0px 32px 16px;
  margin: 20px;
`;

const StyledOutivityTitle = styled.h2`
  margin: 10px 20px 0px 20px;
`;

const StyledOutivityCityName = styled.p`
  margin: 0px 20px 20px 20px;
`;

const StyledOutivityImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const StyledFavoriteButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
