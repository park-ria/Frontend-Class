import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ff76ad, #fff);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;
const Column = styled.div`
  flex: 1;
  text-align: center;
`;
const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
  color: #ff40a6;
`;
const SubTitle = styled.h4`
  font-size: 35px;
  margin: 15px 0 20px;
  color: #000;
`;
const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
  color: #000;
`;
const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  border-radius: 8px;
  object-fit: cover;
`;
const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;
const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };
  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data?.movie.title}</Title>
          <SubTitle>⭐{data.movie.rating}</SubTitle>
          <Button onClick={onClick}>
            💜 {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            quod laborum cumque similique quae facere, autem, tenetur numquam
            veritatis illum repellat maiores voluptates ipsam iusto. Deleniti
            quae ullam voluptatibus blanditiis! Laboriosam, minima assumenda!
            Quidem labore voluptatibus quo fugit quibusdam libero laboriosam
            cumque iusto quam! Quas rerum ab ad fugit soluta culpa repellendus
            maxime nulla suscipit, labore distinctio ratione. Sunt, ea?
          </Description>
        </Column>
        <Image bg={data.movie.medium_cover_image} />
      </ItemGroup>
    </Container>
  );
};
export default Movie;
