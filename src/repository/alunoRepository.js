import con from "./connection.js"

export async function salvarAluno(aluno) {
    let comando = `
    insert into Tb_aluno(nm_aluno,ds_disciplina,vl_nota) values(?,?,?)
    `

    let resp = await con.query(comando, [aluno.nome, aluno.disciplina, aluno.nota])
    let info = resp[0];

    aluno.id = info.insertId;
    return aluno;
    
}

export async function listarAluno() {
    let comando = `
    select * from Tb_aluno`
    
    let resp = await con.query(comando,[]);
    let linhas = resp[0];
    return linhas;


}
