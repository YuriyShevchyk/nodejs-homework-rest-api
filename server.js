const app = require('./app');
const mongoose = require("mongoose");

const { MONGO_DB_URI, PORT = 5000 } = process.env;
mongoose.set('strictQuery', true);

mongoose.connect(MONGO_DB_URI)
  .then(() => {
    app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
          });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })