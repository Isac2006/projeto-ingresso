import './App.css'

function App() {
  function cadastrar(event) {
    event.preventDefault() 
    console.log('Formulário enviado')
}
  var Name
    return (
    <>
      <h1>Cadastro</h1>

      <form onSubmit={cadastrar}>

        <label>
          Name:
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={Name}
           
          />
        </label>

        <p>Tipo de usuário:</p>

        <label>
          <input
            type="radio"
            name="tipo"
            value="user"
  

          />
          Comprador
        </label>

        <label>
          <input
            type="radio"
            name="tipo"
            value="adm"
           
    
          />
          Criador de evento
        </label>

        <br /><br />

        <button type="submit">
          Cadastrar
        </button>

      </form>
    </>
  )
}

export default App
