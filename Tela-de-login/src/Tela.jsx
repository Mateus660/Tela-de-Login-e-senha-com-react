import React, { useState } from "react";

function Tela() {
  const [nome, setNome] = useState(""); // Estado para armazenar o nome
  const [erro, setErro] = useState(""); // Estado para armazenar a mensagem de erro

  const [usuario, setusuario] = useState("");

  const validarNome = (e) => {
    const valorNome = e.target.value;
    setNome(valorNome); // Atualiza o estado 'nome' com o valor digitado

    if (valorNome.length < 3) {
      setErro("Nome inválido"); // Define a mensagem de erro
    } else {
      setErro(""); // Remove a mensagem de erro
    }
  };

  const validarusuario = (e) => {
   const valorNome = e.target.value;
   setNome(valorNome); // Atualiza o estado 'nome' com o valor digitado

   if (valorNome.length < 3) {
     setErro("Nome inválido"); // Define a mensagem de erro
   } else {
     setErro(""); // Remove a mensagem de erro
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
            color: erro ? "red" : "white", // Define a cor da label dinamicamente
          }}
        >
          <p>{erro || "Insira seu nome"}</p>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={validarNome} // Chama a validação a cada tecla pressionada
          />
        </label>

        <label htmlFor="get" id="labelusuario"  onChange={validarusuario}>
          <p>Insira seu nome de usuário</p>
          <input type="text" name="usuario" id="usuario" />
        </label>

        <label htmlFor="get" id="labelsenha">
          <p>Insira sua senha</p>
          <input type="password" name="senha" id="senha" />
        </label>

        <label htmlFor="get" id="labelconfirmsenha">
          <p>Confirme a senha</p>
          <input type="password" name="confirmasenha" id="confirmsenha" />
        </label>

        <input type="reset" value="Limpar" id="limpar" />
        <button id="confirmar">
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
