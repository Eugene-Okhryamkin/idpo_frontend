const uniqueLinks = (array) => {
    let temp = [];

    temp = array.reduce((acc, link) => {
        if(acc.map[link.name]) {
            return acc;
        }

        acc.map[link.name] = true;
        acc.temp.push(link);

        return acc;
    }, {
        map: {},
        temp: []
    }).temp;

    return temp;
}

export default uniqueLinks;