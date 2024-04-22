import dataBase from "./database.js";
import app from "./app.js"

dataBase()

app.listen(3000, () => console.log("Server running on port 3000"))
//express