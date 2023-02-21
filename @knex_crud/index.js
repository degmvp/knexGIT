var database = require("./database");
/* Rotina de insert into table
*/
var dados = [
{
    id: 55,
    nome: "deg usando knex",
    preco: 90.07
},
{
    id: 65,
    nome: "deg GTA",
    preco: 80
},
{
    id: 75,
    nome: "deg !Wow",
    preco: 170
},

{
    id: 05,
    nome: "law janeiro",
    preco: 15.32
},
{
    id: 15,
    nome: "wallace janeiro",
    preco: 30.31
},
{
    id: 20,
    nome: "Jana outubro",
    preco: 20.11
}
]

database.insert(dados).into("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Rotina de consulta query
database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select(['id','nome']).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

////////////////////////////////////////////////////////////

database.select(["id","preco"]).whereRaw("preco > 80.00")
                               .table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.where({id: 55}).delete().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.where({id: 5}).update({preco: 355.00}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select().table("games").orderBy("preco","asc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
database.select().table("games").orderBy("preco","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


// Rotina usando whereRaw e função raw()

//Rotina de consulta query

database.insert({
    nome: "ChessMaster",
    game_id: 11
}).table("estudio").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.insert({
    nome: "NodeJS",
    game_id: 15
}).table("estudio").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


database.insert({
    nome: "Express",
    game_id: 25
}).table("estudio").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


database.select(["game_id","nome"]).whereRaw("game_id > 8")
                               .table("estudio").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database('estudio').then(data => {
    console.log(data);
})