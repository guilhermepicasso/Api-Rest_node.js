import { salvarAluno, listarAluno } from "../repository/alunoRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.post('/aluno' , async (req,resp)=>{
    let aluno = req.body;

    let alunoInserido = await salvarAluno(aluno);
    resp.send(alunoInserido)

})

servidor.get('/aluno', async(req,resp)=>{
    let listaAlunos = await listarAluno();
    resp.send(listaAlunos);
})

export default servidor;