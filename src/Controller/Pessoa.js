
import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa (Id INTEGER PRIMARY KEY, Nome TEXT, Idade INTEGER)')
    })
}


export async function selectPessoas(req, res){
     openDb().then(db=>{
        db.all('SELECT * FROM Pessoa')
            .then(pessoas => res.json(pessoas))
    });
}


export async function selectPessoa(req, res){
    let Id = req.body.Id;
     openDb().then(db=>{
        db.get('SELECT * FROM Pessoa WHERE Id=?', [Id])
            .then(pessoa=> res.json(pessoa)    );
    });
}


export async function insertPessoa(req, res){
    let pessoa = req.body
        openDb().then(db=>{
            db.run('INSERT INTO Pessoa (Nome, Idade) VALUES (? , ?)', [pessoa.Nome, pessoa.Idade]);
    });
    res.json({
        "msg":"Insert de Pessoa feito!",
    })
}


export async function updatePessoa(req, res){
    let pessoa = req.body
    openDb()
        .then(db=>{
            db.run('UPDATE Pessoa SET Nome=?, Idade=? WHERE Id=?', [pessoa.Nome, pessoa.Idade, pessoa.Id]);
    });
    res.json({
        "msg":"Update de Pessoa feito!"
    })
}

export async function deletePessoa(req, res){
    let Id = req.body.Id
     openDb().then(db=>{
        db.get('DELETE FROM Pessoa WHERE Id=?', [Id])
            .then(pessoa => res.json(pessoa))
    });
    res.json({
        "msg":"Delete de Pessoa feito!"
    })
}