function find(data, pathArr) {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, data);
}

export default find;
