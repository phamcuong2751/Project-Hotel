import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "SAD API",
    description: "Nothing to say with you",
  },
  host: "localhost",
  port: process.env.APP_PORT || 5000,
  schemes: ["http"],
};

const outputFile = "./swagger-output-json.json";
const endpointsFiles = ["./middlewares/routes.mdw.js"];
swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import("./app.js");
});
