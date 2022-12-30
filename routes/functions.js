const cheerio = require('cheerio');
const getArticles = {

    TimesOfIndia(Articles, response) {
        const TimesOfIndiahtml = response;
        const TimesOfIndiaBase_URL = 'https://timesofindia.indiatimes.com'
        const $ = cheerio.load(TimesOfIndiahtml);
        $('.main-content ul li', TimesOfIndiahtml).each(function (index) {
            if (index < 5) {
                var source = 'Times of India'
                const url = TimesOfIndiaBase_URL + $(this).find('a').attr('href');
                const title = $(this).find('span:eq(0)').text();
                Articles.push({
                    source, title, url
                })
            }
        })
    },

    HindustanTimes(Articles, response) {
        const HindustanTimeshtml = response;
        const HindustanTimesBASE_URL = 'https://www.hindustantimes.com';
        const $ = cheerio.load(HindustanTimeshtml);
        $('#dataHolder.listingPage .cartHolder.listView.track', HindustanTimeshtml).each(function (index) {
            if (index < 5) {
                var source = 'Hindustan Times'
                const title = $(this).find('h3 a').text();
                const url = HindustanTimesBASE_URL + $(this).find('a').attr('href');
                Articles.push({
                    source,
                    title,
                    url
                })
            }
        })

    },

    NDTV(Articles, response) {
        const NDTVhtml = response;
        const NDTVBase_url = 'https://www.ndtv.com/';
        const source = 'NDTV'
        const $ = cheerio.load(NDTVhtml);
        $('.lisingNews .news_Itm:not(.news_Itm.adBg)', NDTVhtml).each(function (index) {

            if (index < 5) {
                const title = $(this).find('.news_Itm-cont h2 a').text();
                const url = $(this).find('.news_Itm-cont h2 a').attr('href');
                Articles.push({
                    source,
                    title,
                    url
                })

            }
        })
    }
}


module.exports = getArticles;