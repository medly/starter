import { createServer } from 'http';
import app from './app.js';

const server = createServer(app),
    port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server started on port http://localhost:${port}`));

export default server;
