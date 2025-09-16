const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewurlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Successfully connected to DB!!!'))
        .catch((err) => {
            console.error(err);
            console.log('Failed to Connect to DB | Error: ' + err)
            process.exit(1);
        })
}

module.exports = dbConnect;