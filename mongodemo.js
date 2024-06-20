const mongodb = require('mongodb');

const mongoUrl = 'mongodb://127.0.0.1:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(mongoUrl);

async function main() {
  await mongoClient.connect();
  const db = mongoClient.db("university");
  const studentCollection = db.collection("student");

  const newStudent = {
    studentNr: 333333,
    firstName: "Max",
    lastName: "Mustermann",
    semester: 1,
    faculty: "DM",
    course: "OMB",
  };
  await studentCollection.insertOne(newStudent);
  const students = await studentCollection.find().toArray();
  console.log(students);
  await mongoClient.close();
}

main();