/**
 * Filters an array of user objects and returns an array of only active users.
 *
 * @param {object[]} users - An array of user objects.
 * @throws {TypeError} If the 'users' parameter is not an array or contains non-object elements.
 * @throws {TypeError} If any user object in the array does not have an 'active' property.
 * @returns {object[]} An array of only active user objects.
 */

export const findActiveUsers = (users) => {
    if (!Array.isArray(users)) {
        throw new TypeError('users is not an array');
    }
    if (users.some((user) => !user || typeof user !== 'object')) {
        throw new TypeError('users is not an array of objects');
    }
    if (users.some((user) => !('active' in user))) {
        throw new TypeError('users is not an array of user objects');
    }

    return users.filter((user) => user.active === true);
};