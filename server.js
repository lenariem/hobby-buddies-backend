const express = require("express");
const connectDB = require("./config/db");
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

//Connect Database
connectDB();

// Init Middleware 
// body parser
app.use(express.json({extended: false}));

//Route files
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Mount routers
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
