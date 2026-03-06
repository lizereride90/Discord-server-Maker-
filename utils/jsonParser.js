// utils/jsonParser.js

/**
 * Validates and parses JSON data.
 * @param {string} jsonString - The JSON string to validate.
 * @returns {Object|null} - Returns parsed object or null if invalid.
 */
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Invalid JSON:', error.message);
        return null;
    }
}

/**
 * Validates a JSON string.
 * @param {string} jsonString - The JSON string to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
function isValidJSON(jsonString) {
    return typeof jsonString === 'string' && (jsonString.startsWith('{') || jsonString.startsWith('['));
}

module.exports = { parseJSON, isValidJSON };