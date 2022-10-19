class ApiError extends Error {
    
    constructor(status, message) {
        super(),
        this.status = status,
        this.message = message
    }
// 400
    static forbidden (message) {
        return new ApiError(403, message);
    }
    static badRequest (message) {
        return new ApiError(404, message);
    } 
// 500
    static internal (message) {
        return new ApiError(500, message);
    } 
}
module.exports = ApiError;