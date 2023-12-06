import express from "express";

import api from "houseware-mockend";

const app = express();
// app.use(cors())

app.use("/api", api);

app.listen(4000, () => console.log('up on 4000.'))