const {MongoClient} = require('mongodb')

client = new MongoClient("mongodb://localhost:27017")

async function main(){
    try{

        await client.connect()
        console.log("connection successfull")

        dbList = await client.db().admin().listDatabases()
        dbList.databases.forEach(db=> console.log(db))

        database = client.db('test')
        users = database.collection('users')

        // res = await users.insertOne({name: "Asad"})

        // res = await users.insertMany([
        //     {name: "Ahmad"},
        //     {name: "Ali"},
        // ])

        // res = await users.find().project({_id: 0})
        // .toArray()
        // await res.forEach(r=> console.log(r))

        // res = await users.updateOne({name: "Asad"}, {$set: {name: "Zulfiqar"}})

        // res = await users.updateMany({}, {$inc: {age: 1}})

        // res = await users.replaceOne({name: "Asad"}, {name: "Ali"})

        // res = await users.deleteOne({name: "Asad"})

        // res = await users.deleteMany({})



        // console.log(res)


    }
    catch(e){
        console.log("Some error")
    }
    finally{
        await client.close()
    }
}

main().catch(console.error)

