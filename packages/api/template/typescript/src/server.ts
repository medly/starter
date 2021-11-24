import { createServer } from 'http';
import app from './app';
const server = createServer(app),
    port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server started on port http://localhost:${port}`));
module.exports.handler = server.listen.bind(server, port);
