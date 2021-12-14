import express, { Request, Response } from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api", (_: Request, res: Response) => {
  res.json({
    hello: "world",
  });
});

app.listen(PORT, () => {
  console.log("server started");
});
