const axios = require('axios');

async function verifyToken(req, res) {

    let SecretKey = '6Le89_wUAAAAAMLLpMfLTqLPjzU4RUHLoDkBAWGK';

    const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    if (req.body.response) {
        const formData = {
            response: req.body.response,
            secret: SecretKey
        };
        axios.post('https://www.google.com/recaptcha/api/siteverify', encodeForm(formData), { headers: { 'Accept': 'application/json' } })
            .then(function (response) {
                res.status(200).send(response.data);
            })
            .catch(function (error) {
                res.status(500).send(response.data);
            });
    }
}

module.exports = { verifyToken };