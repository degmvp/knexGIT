var database = require("./database");

var dados = [
    { 
        id: 5,
        nome: "call of tiger",
        preco: 19.19
    },
    { 
        id: 6,
        nome: "call of fox",
        preco: 29.19
    },
    { 
        id: 7,
        nome: "call of lion",
        preco: 39.19
    },
    { 
        id: 8,
        nome: "call of snake",
        preco: 49.19
    }
    ]

   async function ins_dados() {

        try {
            await database.transaction(async trans =>{
                await database.insert(dados).table("games");
            });
        }catch(err){
            console.log(err);
        } 

        }

        ins_dados();


/*
    database.insert(dados).into("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });


database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/
database.select(["id","preco"]).whereRaw("preco > 30.00")
                               .table("games").then(data => {
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

database.select().whereRaw("preco > 10.00")
                               .table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});