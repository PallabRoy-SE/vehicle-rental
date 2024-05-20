require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const vehicleTypesRouter = require("./routes/vehicleTypeRoutes");
const vehiclesRouter = require("./routes/vehicleRoutes");
const bookingsRouter = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use("/vehicle-types", vehicleTypesRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/book", bookingsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
