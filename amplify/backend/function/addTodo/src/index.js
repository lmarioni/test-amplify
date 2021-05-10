const {v4: uuid} = require(process.env.NODE_MODULES + 'uuid')

exports.handler = async (event) => {
    // TODO implement
    const a = uuid()
    console.log('a', a)
    const b = uuid()
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};