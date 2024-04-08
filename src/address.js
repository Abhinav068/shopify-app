function getAddress(data, phone_number) {
    console.log(data, phone_number)
    console.log(phone_number==data[0].phone.slice(data[1].phone.length - 10 - data[1].phone.length));
    return data.filter(e => {
        return e.phone.slice(e.phone.length - 10 - e.length) == phone_number;
    })


}

module.exports = { getAddress }