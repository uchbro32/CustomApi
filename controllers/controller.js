const express = require('express')
const app = express();
const pokeModel = require('../model/pokemon');
const allPokemons = async(req, res) => {
    const {name, number, type, sort, select} = req.query;
    const queryObject = {};
    if(name){
        queryObject.name = { $regex: name, $options: "i"};
    }
    if(number){
        queryObject.number = number;
    }
    if(type){
        queryObject.type = type;
    }
    let apiData = pokeModel.find(queryObject);
    if(sort){
        let sortedData = sort.replace(',', " ");
        apiData = apiData.sort(sortedData);
    }
    if(select){
        let selectedData = select.split(',').join(' ');
        apiData = apiData.select(selectedData);
    }

    let page = Number(req.query.page)||1;
    let limit = Number(req.query.limit)||(Math.ceil(151/page));
    let skip = (page-1)*limit
    apiData = apiData.skip(skip).limit(limit);
    const myData = await apiData;
    res.status(200).json(myData);
}

module.exports = allPokemons;