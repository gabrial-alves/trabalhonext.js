
import './page.css'

export default function Home() {
  return (

    <main>

      <form >
      <h2>Formulário para Contato</h2>

        <label> Nome: </label>
        <input type="text" name="nome" placeholder='Digite seu nome....'/> <br /><br />

        <label> E-mail:  </label>
        <input type="text" name="email" placeholder='Digite seu e-mail...'/> <br /><br />
        
        <label> Data de nascimento:  </label>
        <input type="date" name="dataNascimento" /> <br /><br />
        
        <label>Gênero: </label>
        <select id="genero" name="genero">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
        </select>
        
        <input type="submit" value="Enviar"/>
     
      </form>

    
    </main>
  )
}
