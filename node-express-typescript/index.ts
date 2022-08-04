import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import sum from './sum';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(bodyParser());

app.post('/sum', (req: Request, res: Response) => {
  const { firstNum, secondNum } = req.body;

  return res.json({
    sum: sum(firstNum, secondNum)
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});