function getAddress(data, phone_number) {
    return data.filter(e => {
        return e.phone.slice(e.phone.length - 10, e.length) == phone_number;
    })[0].addresses


}

module.exports = { getAddress }