require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {readdirSync} = require('fs');
const cron = require('node-cron');
const { autoAddCartForExpiredAuctionsCron } = require('./controllers/cartController');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

module.exports.io = io;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// เรียกทุก 30 วินาที
cron.schedule('*/30 * * * * *', autoAddCartForExpiredAuctionsCron);

readdirSync('./routes').map((r) => {
  app.use('/api', require(`./routes/${r}`));
});

io.on('connection', (socket) => {
  socket.on('joinProductRoom', (productId) => {
    socket.join(`product_${productId}`);
  });
  socket.on('leaveProductRoom', (productId) => {
    socket.leave(`product_${productId}`);
  });

  socket.on('userLoggedIn', (userId) => {
    socket.join(`user_${userId}`);
  });
 
  socket.on('userLoggedOut', (userId) => {
    socket.leave(`user_${userId}`);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
