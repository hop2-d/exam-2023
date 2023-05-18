const connect = require("./helper/db");

const cors = require("cors");
const connect = require("./config/db");
const { userRoute } = require("./routes/userRoute");
const { postRoute } = require("./routes/postRoute");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

connect();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(postRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

connect();
