const { User } = require("../models/User");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");

exports.getUser = async (req, res) => {
  try {
    const users = await User.find().select('id username phone email createdAt'); // Select relevant fields
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users.');
  }

};

exports.downloadUsers = async (req, res) => {
  try {
    // Ensure the downloads folder exists
    const downloadsDir = path.join(__dirname, "../../downloads");
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir);
    }

    const users = await User.find().select("id username phone email createdAt"); // Select relevant fields

    const csvWriter = createCsvWriter({
      path: path.join(downloadsDir, "users.csv"),
      header: [
        { id: "id", title: "User ID" },
        { id: "username", title: "Username" },
        { id: "phone", title: "Phone" },
        { id: "email", title: "Email" },
        { id: "createdAt", title: "Joined On" },
      ],
    });

    // Add logging to see the user data
    console.log("Fetched Users: ", users);

    const userData = users.map((user) => ({
      id: user.id,
      username: user.username, // corrected field name
      phone: user.phone,
      email: user.email,
      createdAt: user.createdAt.toISOString(), // Format date as needed
    }));

    // Add logging to see the mapped user data
    console.log("User Data to be written to CSV: ", userData);

    await csvWriter.writeRecords(userData);

    // Log the path of the CSV file
    const filePath = path.join(downloadsDir, "users.csv");
    console.log("CSV File Path: ", filePath);

    // Download CSV file
    res.download(filePath, "users.csv", (err) => {
      if (err) {
        console.error("Error downloading the file:", err);
        res.status(500).send("Error downloading the file.");
      } else {
        // Optionally delete the file after download
        fs.unlinkSync(filePath);
      }
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).send("Error generating CSV.");
  }
};
