import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { app } from "./routes/delivery.js";

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Food Delivery App",
        version: "0.1.0",
        description:
          "Api for dynamic pricing module to calculate the total cost of food delivery based on various factors",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Ayush Rawat",
          url: "https://www.linkedin.com/in/ayush-rawat-uki",
          email: "rawatayush.uki@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
const specs = swaggerJSDoc(options);
app.use(
    "/",
    swaggerUI.serve,
    swaggerUI.setup(specs, {
        explorer: true,
        // customCssUrl:
        //     "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
        customCssUrl:
            "./style/dom.css",
    })
);