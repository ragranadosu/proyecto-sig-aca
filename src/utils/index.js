import data from '../data/RoutesNames';

const utils = {};

utils.searchRoute = (route) => {
    const regex = new RegExp(`(${route})+`);

    var search = [];

    for (var i = 0; i < data.all.length; i++) {
        if (regex.test(data.all[i])) {

            search.push(data.all[i]);
        }

    }

    return search;

}

export default utils;