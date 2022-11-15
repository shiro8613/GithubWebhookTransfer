const express = require('express');
const fetch = require('snekfetch');
const app = express();

const URL = 'DiscordWebhookURL/github';
const PORT = 8080;

const deleteHeader = [
    'content-type',
    'cdn-loop',
    'cf-connecting-ip',
    'cf-ipcountry',
    'cf-ray',
    'cf-visitor',
    'cf-warp-tag-id',
    'x-forwarded-for',
    'x-forwarded-proto'
]

app.use(express.json());

app.post("/payload", (req, res) => {
    const stats = req.body.repository.private;
    const body = req.body;

    if (!stats) {

        const headers = req.headers;
        delete headers.connection;
        deleteHeader.forEach(headKey => {
            delete headers[headKey];
        });

        fetch.post(URL,)
        .set({'content-type': 'application/json'})
        .set(headers)
        .send(body)
        .then(() => console.log("Requst Send to Discord"))
        .catch(e => console.log(`[ERROR] ${e}`));
    }

    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`${PORT} ServerStart`));
