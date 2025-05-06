require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {readdirSync} = require('fs');
const cron = require('node-cron');
const { autoAddCartForExpiredAuctionsCron } = require('./controllers/cartController');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// เรียกทุก 30 วินาที
cron.schedule('*/30 * * * * *', autoAddCartForExpiredAuctionsCron);

readdirSync('./routes').map((r) => {
  app.use('/api', require(`./routes/${r}`));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
