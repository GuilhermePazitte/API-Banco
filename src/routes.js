import { Router } from 'express';
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa}  from './Controller/Pessoa.js'

const router = Router();

createTable()

router.get('/', (req, res)=>{
    res.json({
        "msg": "Api Rodando"
    }) 
})

router.get('/pessoa', selectPessoa)
router.get('/pessoas', selectPessoas)
router.post('/pessoa', insertPessoa)
router.put('/pessoa', updatePessoa)
router.delete('/pessoa', deletePessoa)

export default router