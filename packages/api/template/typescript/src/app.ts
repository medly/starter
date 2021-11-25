import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';

const app: Application = express();

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Security */
app.use(helmet());
app.disable('x-powered-by');
app.use(morgan('tiny'));
app.use(cors());

/** Routes */
app.use('/api/book', routes);

app.get('/', (_, res) => {
    res.send('Hello World!');
});

export default app;
