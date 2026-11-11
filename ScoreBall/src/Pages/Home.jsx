import { useState } from 'react'
import '../App.css'
import Header from '../Header'
import Menu from '../ Menu'

function App() {
    const [contador, setContandor]=useState(0);
  function increment() {
    setContandor(contador + 1)
  }

  return (

    <>
      <Header title="Bem vindo Wallas" />

      <Menu />
      <section id="center">

        <div>
          <h1>Home</h1>
          <p><input type="button" value="Clique" onClick={increment} /></p>

          <p>{contador}</p> cliques!
        </div>
      </section>

      <section id="spacer"></section>
    </>

  )
}
export default App