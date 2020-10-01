const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://kathiee:a8ex6Tfq98D3EpA@gql-test.bqhse.mongodb.net/<dbname>?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use(
  '/graphql', 
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

