import https from 'https'

let subscriptionKey = process.env.SUBSCRIPTION_KEY;

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';

export const BingSearch = (query, offset) => {
    return new Promise((resolve, reject) => {
       let options = {
            method : 'GET',
            hostname : host,
            path : path + '?q=' + encodeURIComponent(query) + '&count=' + offset,
            headers : {
                'Ocp-Apim-Subscription-Key' : subscriptionKey,
            }
        };

        let req = https.request(options, (res)=>{
            let body = '';
            res.on('data', (d) => {
                body += d;
            });
            res.on('end', () => {
              //callback(null, JSON.parse(body)) 
                resolve(JSON.parse(body))
            });
            res.on('error', (e) => {
                //callback(e.message) 
                reject(e.message)   
            });
        });
    req.end();
    });
}
//export default BingSearch