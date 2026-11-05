class validationError extends Error{
    constructor(statusCode, message){
        super(message);
        this.name = "validationError";
        this.statusCode = statusCode || 500;

    }
}

export default validationError;