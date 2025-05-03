const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    console.log("Hello this is the new route");
    res.send("New route added")
})
app.listen(3000, ()=> {
    console.log("server is listening on the port 3000")
});