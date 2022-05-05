const isEmpty = value => value.trim().length === 0;

const isValidPostal = value => value.trim().length === 5;

export {
    isEmpty,
    isValidPostal
}