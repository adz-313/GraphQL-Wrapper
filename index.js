const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema'); 

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to GraphQL Wrapper! To access graphiql, simply add "/graphql" in the above url.');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));