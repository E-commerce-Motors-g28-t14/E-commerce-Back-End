import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

 

export const createSwaggerSpec = (app: express.Application): void => {

  
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "K-Motors - G28",
        version: "1.0.0",
        description: "API - E-commerce car selling",
      },
    },
    apis: ["./src/routes/*.ts"],
    
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};