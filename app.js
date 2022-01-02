const express = require('express');

module.exports = () => {
  const app = express();
  
  //middleware
  app.use(express.json());
  app.use();

  return app;
};