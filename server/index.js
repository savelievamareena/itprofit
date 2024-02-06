import db from "./db.js";
import express from "express";
import cors from "cors";
const port = 9090;

const app = express();

app.use(cors());
app.use(express.text({ type: 'application/json' }));

let sequelize = await db();

app.post("/api/registration", (req, res) => {
    if (Math.random() > 0.5) {
        res.statusCode = 400;

        setTimeout(() => {
            res.send({
                status: "error",
                message: "Bad request",
            });
        }, Math.random() * 1000);

        return;
    }

    setTimeout(() => {
        res.statusCode = 200;
        res.send({
            status: "success",
            message: "You are registered",
        });
    }, Math.random() * 1000);
});

app.get("/api/ping", (req, res) => {
    res.statusCode = 200;
    res.send({
        status: "success",
        message: "Server is ready",
    });
});

app.post("/api/callback", (req, res) => {
    // let postBody = JSON.parse(req.body);

    (async function(req, res){
        let requestId;
        let requestBody = req.body;
        if(typeof req.body === "string") {
            requestBody = JSON.parse(requestBody);
        }


        let statusCode = 500;
        let responseBody = {
            "status": "error"
        }

        try {
            requestId = await sequelize.query(
                "INSERT INTO requests (name, email, phone_number, message) VALUES (?, ?, ?, ?)",
                {
                    replacements: [requestBody.name, requestBody.email, requestBody.phone, requestBody.message]
                }
            );
            if(requestId?.[0]) {
                statusCode = 200;
                responseBody.status = "success";
                responseBody.msg = "Your request has been successfully sent";
                responseBody.requestId = requestId?.[0];
            }
        } catch (error) {
            responseBody[error?.errors?.[0]?.path] = error?.errors?.[0]?.message;
        }

        res.status(statusCode);
        res.send(responseBody);
    })(req, res);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
