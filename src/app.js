"import {openDb} from './configDB.js';"
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa}  from './Controller/Pessoa.js'
import express from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/', (req,res)=>{
    res.send("Ola Mundo!");
});

app.get('/pessoas', async (req,res)=>{
    let pessoas = await selectPessoas();
    res.json(pessoas);
});

app.get('/pessoas', async (req,res)=>{
    let pessoas = await selectPessoas();
    res.json(pessoas);
});

app.delete('/pessoa', async (req,res)=>{
    let pessoa = await deletePessoa(req.body.Id);
    res.json(pessoa);
});

app.post('/pessoa',(req, res)=>{
    insertPessoa(req.body);
    res.json({
        "statusCode": 200
    });
});

app.put('/pessoa',(req, res)=>{

    if (req.body && !req.body.Id){
            res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um Id!"
        });
    }else{
        updatePessoa(req.body)
        res.json({
            "statusCode": 200
        });
    }
});



app.listen(3000, ()=> console.log("Api Rodando."))