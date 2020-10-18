const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => { // db.run() para inserção  db.all para consulta
    // Inserir dados
    await saveOrphanage(db,  {
        id: 2,
        lat: -27.222633,
        lng: -49.6555874,
        name: "Lar dos meninos",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação ded risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });

    /*// deletar dados
    db.run(`
        DELETE from orphanages 
        WHERE id = 4
    `);

    // Consultar dados
    const selectedOrphanages = await db.all(`
        SELECT * FROM orphanages
    `);

    console.log(selectedOrphanages);*/
})