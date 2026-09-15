const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    hello: String
    student: Student
  }

  type Student {
    id: ID
    name: String
    course: String
    age: Int
  }
`);