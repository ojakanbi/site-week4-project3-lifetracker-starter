
const app = require('./app'); //importing the app
const { PORT } = require("./config"); // imports the port from the config file



app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //telling the app to listen on the port