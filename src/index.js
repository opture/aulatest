
import http from 'http'
import app from './app'

const server = http.Server(app);

server.listen(3000, function(){
  console.log('listening on *:3000');
});