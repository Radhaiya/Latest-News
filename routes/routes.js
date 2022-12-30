const express = require('express');
const axios = require('axios');
const route = express.Router();
const Data = require('./functions');
const newsLetters = require('./newsLetterData');


route.get('/', async (req, res) => {


    const Articles = [];

    const TimesOfIndia_url = `${newsLetters[0].address}`;
    const HindustanTimes_url = `${newsLetters[1].address}`
    const NDTV_url = `${newsLetters[2].address}`

    const [response1, response2, response3] = await axios.all([
        axios.get(TimesOfIndia_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } }),
        axios.get(HindustanTimes_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } }),
        axios.get(NDTV_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
    ]);

    Data.TimesOfIndia(Articles, response1.data)
    Data.HindustanTimes(Articles, response2.data)
    Data.NDTV(Articles, response3.data);

    return res.send(Articles);


})

route.get('/:newsletter', async (req, res) => {
    const newsLetter = req.params.newsletter
    const Articles = [];
    const TimesOfIndia_url = `${newsLetters[0].address}`;
    const HindustanTimes_url = `${newsLetters[1].address}`
    const NDTV_url = `${newsLetters[2].address}`


    switch (newsLetter) {
        case 'timesofindia':
            const response1 = await axios.get(TimesOfIndia_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
            Data.TimesOfIndia(Articles, response1.data);

            return res.send(Articles);
        case 'hindustantimes':
            const response2 = await axios.get(HindustanTimes_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
            Data.HindustanTimes(Articles, response2.data);
            return res.send(Articles);
        case 'ndtv':
            const response3 = await axios.get(NDTV_url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
            Data.NDTV(Articles, response3.data);
            return res.send(Articles);


    }
})


module.exports = route;
