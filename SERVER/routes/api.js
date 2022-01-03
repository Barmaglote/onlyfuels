const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb://localhost:27017';


exports.test = (req, res, next) => {
    console.log("api/test");
    res.json({test:"works!"})   
}

exports.upload = (req, res, next) => {
    if(!req.body) {
        res.send({
            status: false,
            message: 'No data for upload'
        });
    } else{        
        MongoClient.connect(uri,(err,client) =>{            
            try {
                var collectionName = req.params.collection;
                var connection = client.db('local');
                connection.collection(collectionName).insertMany(req.body, {w: 1});
                res.send({
                    status: true,
                    message: 'Data is uploaded'
                });                
            } catch(e) {
                res.send({
                    status: false,
                    message: 'Unable to upload'
                });             
            }
        });
    }   
}

exports.task = (req, res, next) => {
    if(!req.params.taskId) {
        res.send({
            status: false,
            message: 'TaskId is undefined'
        });
    } else{        
        MongoClient.connect(uri,(err,client) =>{            
            try {
                var id = req.params.taskId;
                var connection = client.db('local');
                if (id == 1) {

                    connection.collection("baskets").aggregate([{ $match: {status: "ORDERED"}}, 
                    {$unwind : "$items" },
                    {
                        $group: {
                            _id: { account_id: "$account_id", year: { $year: {"$toDate": "$created"}} },
                            count: { $first: "$items.quantity" },
                        }
                    },
                    { "$lookup": {
                        "from": "accounts",
                        "localField": "_id.account_id",
                        "foreignField": "_id",
                        "as": "account"
                        }
                    }, 
                    {$sort: {count: -1}}                    
                        ]).toArray(function(err, data){
                            res.send({
                                status: !err,
                                message: JSON.stringify(data)
                            });
                    });

                }
            } catch(e) {
                console.log(e);
                res.send({
                    status: false,
                    message: 'Unable to get data'
                });
            }
        });
    }   
}