import express from 'express';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send({ status: 'Healthcheck OK'});
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
})