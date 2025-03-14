const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/main", protectedRoute);

app.listen(3000, () => {
  console.log("App listen in port 3000");
});
