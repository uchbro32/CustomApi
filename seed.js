require('dotenv').config();
const mongoose = require('mongoose');
const pokemon = require('./model/pokemon');
const connectDB = require('./db/connect');
const uri = process.env.MONGODB_URL;
const jsonData = require('./pokemons.json');


const db = async () => {
    try {
        await connectDB(uri);
        seed();
        console.log("Connected");
    }
    catch (e) {
        console.log(e);
    }
}
db();

console.log(jsonData[0].name.english);

const seed = async () => {
    await pokemon.deleteMany({});
    for (let i = 0; i < 151; i++) {
        const id = jsonData[i].id;
        const pokeName = jsonData[i].name.english;
        const pokeType = jsonData[i].type;
        const pokeHp = jsonData[i].base.HP;
        const pokeAttack = jsonData[i].base.Attack;
        const pokeDefence = jsonData[i].base.Defense;
        const pokeSpAtt = jsonData[i].base['Sp. Attack'];
        const pokeSpDef = jsonData[i].base['Sp. Defense'];
        const pokeSpeed = jsonData[i].base.Speed;

        const camp = new pokemon({
            number: id,
            name: pokeName,
            type: pokeType,
            base: {
                hp: pokeHp,
                attack: pokeAttack,
                defence: pokeDefence,
                sp_attack: pokeSpAtt,
                sp_defence: pokeSpDef,
                speed: pokeSpeed
            }
        })
        // console.log(camp);
        await camp.save()
    }
}

