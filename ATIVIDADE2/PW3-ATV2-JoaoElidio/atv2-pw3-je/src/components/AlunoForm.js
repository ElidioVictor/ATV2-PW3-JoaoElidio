import { useState } from "react";

function CreateStudent (){

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [rg, setRg] = useState("")
    const [telefone, setTelefone] = useState("")
    const [telResponsavel, setTelResponsavel] = useState("")
    const [dtNacimento, setDtNacimento] = useState("")

    function cadastroAluno(e){

    e.preventDefault();

        let aluno = JSON.stringify({
            name : name,
            cpf : cpf,
            email : email,
            rg : rg,
            telefone : telefone,
            telResponsavel : telResponsavel,
            dtNacimento : dtNacimento,
        });
        console.log(aluno);
        alert(aluno);
    }        
        function replaceCPF (cpf){
        
        cpf = cpf.replace(/\D/g,""); 
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-4")
        setCpf(cpf)
    }

    return(
        <form onSubmit={cadastroAluno} className="form">
            <h1>Cadastro de aluno</h1>
            <input 
                type="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) =>{setName(event.target.value)}}
            />
            <input 
                type="email"
                placeholder="ex: aluno.12@gmail.com"
                value={email}
                onChange={(event) =>{setEmail(event.target.value)}}
            />
            <input
                type="text"
                placeholder="123.456.789-99"
                value={cpf}
                onChange={(event) =>{replaceCPF(event.target.value)}}
                maxLength={15}
            />
            <input
                type="text"
                placeholder="12.345.678-9"
                value={rg}
                onChange={(event) =>{setRg(event.target.value)}}
                maxLength={12}
            />
            <input
                type="text"
                placeholder="telefone para contato"
                value={telefone}
                onChange={(event) =>{setTelefone(event.target.value)}}
                maxLength={11}
            />
            <input 
                type="date"
                placeholder="digite sua data de nacimento"
                value={dtNacimento}
                onChange={(event) =>{setDtNacimento(event.target.value)}}
            />
            <input 
                type="text"
                placeholder="telefone do responsavel"
                value={telResponsavel}
                onChange={(event) =>{setTelResponsavel(event.target.value)}}
                maxLength={11}
            />
            <button type="subimit">Cadastrar</button>
        </form>
    );
};

export default CreateStudent;