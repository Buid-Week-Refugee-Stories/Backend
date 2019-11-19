const fetch = require("node-fetch");

const dynoPing = (url, interval = 25, callback) => {
    const milliseconds = interval * 60000;
    
    setTimeout(() => {

        try {
            console.log(`setTimeout called.`);
            fetch(url).then(() => console.log(`Fetching ${url}.`));
        } catch (err) {
            console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`);
        } finally {

            try {
                callback();
            } catch (e) {
                callback ? console.log("Callback failed: ", e.message) : null;
            } finally {
                return wakeUpDyno(url, interval, callback);
            }

        }

    }, milliseconds);
};

module.exports = dynoPing;

// ! CREDITS ON KEEPING HEROKU FROM SLEEPING: 
// ! https://hackernoon.com/how-to-prevent-your-free-heroku-dyno-from-sleeping-dggxo3bi2