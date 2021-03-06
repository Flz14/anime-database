import React from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";
import Spinner from "./Spinner";

const AnimeCardsStyle = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;
  p: {
    text-decoration: none;
  }
  grid-template-columns: 14rem 14rem 14rem 14rem 14rem;
  &:hover: {
  }
  @media (max-width: 600px) {
    grid-template-columns: 45% 45%;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    grid-template-columns: 30% 30% 30%;
  }
`;

const AnimeCardsGrid = ({ animesData }) => {
  return (
    <>
      {animesData ? (
        <AnimeCardsStyle className="justify-content-center">
          {animesData.data.map((data) => {
            return (
              <AnimeCard
                key={data.id}
                title={data.attributes.canonicalTitle}
                imgUrl={data.attributes.posterImage}
                id={data.id}
                popularityRank={data.attributes.popularityRank}
                ratingRank={data.attributes.ratingRank}
                synopsis={data.attributes.synopsis}
              ></AnimeCard>
            );
          })}
        </AnimeCardsStyle>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default AnimeCardsGrid;
