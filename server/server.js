// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./schema");
// const db = require("./config/connection");
// const path = require("path");
// const { authMiddleware } = require("./utils/auth");

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());



// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     serverStrt();
//   });
// });
// console.log("server")
// async function serverStrt() {
//   server.applyMiddleware({ app });
//   if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")));
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
//   }
//   await server.start();
// }
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require( 'apollo-server-core');
const http = require('http');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware ,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,
    path: '/'
  });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

  // Modified server startup
  db.once("open", () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        serverStrt();
      });
})
}

startApolloServer(typeDefs, resolvers)