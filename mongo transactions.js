// Mongo DB transaction in shell

const session = db.getMongo().startSession();

session.startTransaction();

const account = session
  .getDatabase("< add database name here>")
  .getCollection("<add collection name here>");

//Add database operations like .updateOne() here

session.commitTransaction();
// or
session.abortTransaction();
