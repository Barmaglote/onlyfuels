const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

let db = null;

module.exports = () => {
    return MongoClient.connect(uri)
        .then(function(err, client) {
            if (err) throw err;
            var db = client.db('local');
            console.log("MongoDB client is ready");
        });
}

module.exports.Accounts = {
    all(db) {
        return db.collection('accounts').find().sort({ name: 1}).toArray();
    },
    find(db, _id) {
        if (typeof _id !== 'object') _id = ObjectId(_id);
        return db.collection('accounts').findOne({ _id});
    },
    create(db, data) {
        return db.collection('accounts').insertOne(data, {w: 1});
    },
    createMany(db, data) {
        return db.collection('accounts').insertMany(data, {w: 1});
    },        
    delete(_id) {
        if (typeof _id !== 'object') _id = ObjectId(_id);
        return db.collection('accounts').deleteONe({ _id}, {w: 1});
    },
    clear(){
        return db.collection('accounts').remove({});
    }
}
