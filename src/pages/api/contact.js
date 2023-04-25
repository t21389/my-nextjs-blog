import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input!" });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.76hq8ko.mongodb.net/${process.env.mongodb_database}`;
    console.log("connectionString ", connectionString);
    try {
      client = await MongoClient.connect(connectionString);
      // "mongodb+srv://hiten:hitman@atlascluster.76hq8ko.mongodb.net/test"
    } catch (err) {
      res.status(500).json({ message: "could not connect to database!" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.inserertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
    }

    client.close();

    res
      .status(200)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
