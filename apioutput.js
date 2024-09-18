function output(req) {
    return {                       
        "appId": req.params.appId,
        "api": req.params.apiType,
        "message": "callback received"
    };
}

module.exports = {
    output: output
};