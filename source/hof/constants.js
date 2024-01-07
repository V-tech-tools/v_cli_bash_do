/**
 * Array of exit aliases.
 * @type {string[]}
 */
export const exitAliases = ['exit', 'X', 'x', 'quit', 'terminate', '.exit']

/**
 * Checks if the input is an exit alias.
 * @param {string} input - The input to check.
 * @returns {boolean} - Returns true if the input is an exit alias, otherwise false.
 */
export const isExitAlias = (input) => exitAliases.indexOf(input) !== -1
