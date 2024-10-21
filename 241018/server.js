import { ApolloServer, gql } from "apollo-server";
//const {ApolloServer} = require("apollo-server");

let tweets = [
  {
    id: "1",
    text: "First One!",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One!",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "David",
    lastName: "Peter",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    """
    Is the sum of firstName + lastName as a String
    """
    userName: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allTweets: [Tweet!]!
    allUsers: [User!]!
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
    ping: String!
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String
    title_english: String
    title_long: String
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String
    medium_cover_image: String!
    large_cover_image: String!
  }
`;
//최초의 타입을 정의하는 쿼리에서는 대괄호(allTweets: [Tweet])를 써주지만 다음부터는 대괄호를 쓰지 않음(author: User)
// !는 required 필수 값

const resolvers = {
  // Query: {
  //   tweet() {
  //     console.log("I'm called");
  //     return null;
  //   },
  //   ping() {
  //     return "pong";
  //   },
  // },
  Query: {
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("userName called");
      return users;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    userName({ firstName }) {
      return firstName;
    },
    userName({ lastName }) {
      return lastName;
    },
    userName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        return null;
      }
      return result;
    },
  },
};
// 실행을 위한 resolvers 함수
// 무조건 가지고 있는 기존 데이터인 root를 첫번째로 받는 값 args를 두번째로

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
