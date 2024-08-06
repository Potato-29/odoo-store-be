const { default: mongoose } = require("mongoose");

console.log("CONNECTION_URI: ", CONNECTION_URI);
// (() => {
//   mongoose.connect(process.env.CONNECTION_URI);
//   mongoose.connection.on("connection", () => console.log("db connected"));
// })();
