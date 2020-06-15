module.exports = {
    notEmpty(arr) {
        return Array.isArray(arr) && Object.keys(arr).length > 0;
    }
}