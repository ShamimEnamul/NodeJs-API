const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

const mongodbConnect = (callback) =>
{
mongodbClient.connect('mongodb+srv://Rubayat:iamshamim95@rubayat-exius.mongodb.net/test?retryWrites=true&w=majority')
.then(result => 
    {
        console.log('connected!');
    })
.catch(err =>
    {
        console.log(err);
    })
}

module.exports = mongodbConnect;
