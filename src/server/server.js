const app = require('./app');

app.listen(process.env.PORT || 3000, () => console.log("Running on Port 3000"));