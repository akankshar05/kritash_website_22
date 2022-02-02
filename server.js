import express from "express";
import cors from "cors";
import connectDB from "./db/Connect.js";
import User from "./model/User.js";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  //   const { name, address, email, mob1, mob2, bg } = req.body;

  const user = await User.create(req.body);
  //   const userAlreadyExists = await User.findOne({ email });
  //   if (userAlreadyExists) {
  //     alert("email already in use");
  //   }
  res.status(200).json({
    user: {
      name: user.name,
      address: user.address,
      email: user.email,
      mob1: user.mob1,
      mob2: user.mob2,
      bg: user.bg,

      prblm: user.prblm,
    },
  });
});
const port = 5005;
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://Akankshar05:Motihari123%40@cyber-box.vwvvx.mongodb.net/Cyber-Box?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is listening");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
