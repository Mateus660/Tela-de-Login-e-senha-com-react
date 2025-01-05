import React, { useState } from "react";

function Tela() {
  const [nome, setNome] = useState(""); // Estado para armazenar o nome
  const [usuario, setUsuario] = useState(""); // Estado para armazenar o usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [confirmaSenha, setConfirmaSenha] = useState(""); // Estado para armazenar a confirmação de senha

  const [erroNome, setErroNome] = useState(""); // Mensagem de erro para o nome
  const [erroUsuario, setErroUsuario] = useState(""); // Mensagem de erro para o usuário
  const [erroSenha, setErroSenha] = useState(""); // Mensagem de erro para a senha
  const [erroConfirmaSenha, setErroConfirmaSenha] = useState(""); // Mensagem de erro para a confirmação de senha

  const validarNome = (e) => {
    const valorNome = e.target.value;
    setNome(valorNome);

    if (valorNome.length < 3) {
      setErroNome("Nome deve ter no mínimo 3 caracteres.");
    } else {
      setErroNome("");
    }
  };

  const validarUsuario = (e) => {
    const valorUsuario = e.target.value;
    setUsuario(valorUsuario);

    if (valorUsuario.length < 3) {
      setErroUsuario("Usuário deve ter no mínimo 3 caracteres.");
    } else {
      setErroUsuario("");
    }
  };

  const validarSenha = (e) => {
    const valorSenha = e.target.value;
    setSenha(valorSenha);

    if (valorSenha.length < 6) {
      setErroSenha("Senha deve ter no mínimo 6 caracteres.");
    } else {
      setErroSenha("");
    }
  };

  const validarConfirmaSenha = (e) => {
    const valorConfirmaSenha = e.target.value;
    setConfirmaSenha(valorConfirmaSenha);

    if (valorConfirmaSenha !== senha) {
      setErroConfirmaSenha("As senhas não coincidem.");
    } else {
      setErroConfirmaSenha("");
    }
  };

  return (
    <div id="container">
      <header>
        <h1>Faça Seu login</h1>
      </header>

      <div id="tela-login">
        <label
          id="labelnome"
          style={{
            color: erroNome ? "red" : "white", // Define a cor dinamicamente
          }}
        >
          <p>{erroNome || "Insira seu nome"}</p>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={validarNome}
          />
        </label>

        <label
          id="labelusuario"
          style={{
            color: erroUsuario ? "red" : "white", // Define a cor dinamicamente
          }}
        >
          <p>{erroUsuario || "Insira seu usuário"}</p>
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={validarUsuario}
          />
        </label>

        <label
          id="labelsenha"
          style={{
            color: erroSenha ? "red" : "white", // Define a cor dinamicamente
          }}
        >
          <p>{erroSenha || "Insira sua senha"}</p>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={validarSenha}
          />
        </label>

        <label
          id="labelconfirmsenha"
          style={{
            color: erroConfirmaSenha ? "red" : "white", // Define a cor dinamicamente
          }}
        >
          <p>{erroConfirmaSenha || "Confirme sua senha"}</p>
          <input
            type="password"
            name="confirmasenha"
            id="confirmsenha"
            value={confirmaSenha}
            onChange={validarConfirmaSenha}
          />
        </label>

        <input type="reset" value="Limpar" id="limpar" />
        <button id="confirmar" disabled={erroNome || erroUsuario || erroSenha || erroConfirmaSenha}>
          Cadastrar
        </button>
        <p id="link">
          Já tem cadastro? <a href="">Faça o login</a>
        </p>
      </div>
    </div>
  );
}

export default Tela;
