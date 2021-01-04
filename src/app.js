import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";

const app = express();

app.set(`PORT`, process.env.PORT);
app.use(morgan(`dev`));
app.use(helmet());

app.listen(app.get(`PORT`), () => {
  console.log(`🍀 ${app.get(`PORT`)} CLUSTER TEST SERVER START`);
});
