import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use((req, res, next) => {
  req.setTimeout(10 * 60 * 1000); // 10 minutes
  next();
});