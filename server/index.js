const express = require("express");
const cors = require("cors");
const app = express();

const port = 9090;

app.use(cors());
app.use(express.text({ type: 'application/json' }));

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
    res.status(200);
    let postBody = JSON.parse(req.body);
    console.log(postBody.name && postBody.email && postBody.phone && postBody.message)
    if(postBody.name && postBody.email && postBody.phone && postBody.message) {
        res.send({
            "status": "success",
            "msg": "Your request has been successfully sent"
        });
    }else {
        let errorFields = {};
        if(!postBody.name) {
            errorFields.name = "Something went wrong. Please, try again later."
        }
        if (!postBody.email) {
            errorFields.email = "Something went wrong. Please, try again later."
        }
        if (!postBody.phone) {
            errorFields.phone = "Something went wrong. Please, try again later."
        }
        if (!postBody.message) {
            errorFields.message = "Something went wrong. Please, try again later."
        }

        res.send({
            "status": "error",
            "fields": errorFields
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});