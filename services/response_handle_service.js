const config = require('../config/appConfig.json');
const cr = require('../entity/common_response');




const handleCommonResponse = async (successCb, response) => {
    try {
        return await successCb(({ data }) =>
            response.set("Connection", "close").status(200).json(data)
        );
    } catch (error) {
        var code = config.errors[error];
        console.log(error);
        var r = cr.responseCb(
            cr.headerCb({ code: !code ? config.response_code.error : code })
        );
        return r;
    }
};



module.exports= {
    handleCommonResponse,
}