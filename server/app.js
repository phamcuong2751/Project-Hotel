import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import activeRoutes from "./middlewares/routes.mdw.js";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger-output-json.json" assert { type: "json" };
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

// enable CORS
app.use(cors());


activeRoutes(app);
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerFile));
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
