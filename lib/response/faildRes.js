// dependency library
const { nanoid } = require('nanoid');


const faildRes = (statusCode = 500, message = "some error has occured!", origin = "", content = "", tryAgain = false) => {
    let errorToken = nanoid(12);
    content = content === "" ? "" : `${content.message}  ${content.stack}`;

    // saving error and sending on slack runs asyncronsly
    setTimeout(() => {
        // send slack error message
        // {
        //     errorToken,
        //     statusCode,
        //     message,
        //     tryAgain,
        //     content,
        //     origin,
        // }

        // save errors in DB

    }, 0);


    return {
        errorToken,
        statusCode,
        message,
        tryAgain
    };
}


module.exports = faildRes;