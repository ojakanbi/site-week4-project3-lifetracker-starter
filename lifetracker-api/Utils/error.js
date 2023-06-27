// error class

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }

   
    static badRequest(msg) {
        return new ExpressError(msg, 400);
    }
}

// export the class
module.exports = ExpressError;


 
