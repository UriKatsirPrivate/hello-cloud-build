const functions = require('@google-cloud/functions-framework');

functions.http('hello-cloud-build', (req, res) => {
 res.send(`Say Hello ${req.query.name || req.body.name || 'World'}!`);
});
