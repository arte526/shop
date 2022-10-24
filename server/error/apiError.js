class ApiError extends Error {
    status;
    errors;
    constructor(status, message, errors = []) {
        super(message),
        this.status = status,
        this.errors = errors
    }
// 400
    static badRequest (message, errors = []) {
        return new ApiError(400, message, errors);
    } 
    static unAuthorized() {
        return new ApiError(401, 'User not authorized');
    }
    static forbidden (message) {
        return new ApiError(403, message);
    }
// 500
    static internal (message) {
        return new ApiError(500, message);
    }     
}
module.exports = ApiError;