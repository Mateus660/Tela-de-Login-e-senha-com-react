function Tela() {
   return <div id="container">
     
    <header><h1>Faça Seu login</h1></header>
     
     <div id="tela-login">
     
     <label htmlFor="get" id="labelnome"><p>Insira seu nome</p>
      <input type="text" name="nome" id="nome" />
     </label>
     
     <label htmlFor="get" id="labelusuario"><p>Insira seu nome de usuário</p>
      <input type="text" name="usuario" id="usuario" />
      </label>
     
     <label htmlFor="get" id="labelsenha"> <p>Insira sua senha</p>
      <input type="password" name="senha" id="senha" />
      </label>
     
     <label htmlFor="get" id="labelconfirmsenha"> <p>Confirme a senha</p>
      <input type="password" name="confirmasenha" id="confirmsenha" />
      </label> 

      <input type="reset" value="Limpar" id="limpar"/>
      <input type="submit" value="Cadastrar" id="confirmar"/>
      <p>Já tem cadastro ? <a href="">Faça o login</a></p>
      </div>
   </div>

}              

export default Tela
