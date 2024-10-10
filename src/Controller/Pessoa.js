import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa (Id INTEGER PRIMARY KEY, Nome TEXT, Idade INTEGER)')
    })
}

export async function insertPessoa(pessoa){
    openDb()
        .then(db=>{
            db.run('INSERT INTO Pessoa (Nome, Idade) VALUES (? , ?)', [pessoa.Nome, pessoa.Idade]);
    });
}

export async function updatePessoa(pessoa){
    openDb()
        .then(db=>{
            db.run('UPDATE Pessoa SET Nome=?, Idade=? WHERE Id=?', [pessoa.Nome, pessoa.Idade, pessoa.Id]);
    });
}

export async function selectPessoas(){
    return openDb().then(db=>{
            return db.all('SELECT * FROM Pessoa')
            .then(res => res)
    });
}

export async function selectPessoa(Id){
    return openDb().then(db=>{
            return db.get('SELECT * FROM Pessoa WHERE Id=?', [Id])
            .then(res => res)
    });
}

export async function deletePessoa(Id){
    return openDb().then(db=>{
            return db.get('DELETE FROM Pessoa WHERE Id=?', [Id])
            .then(res => res)
    });
}