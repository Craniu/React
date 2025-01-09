import Card from './components/Card'
import Productos from './components/Productos'

const App = () => {

return (
  <>
  <h1>Hola Mundo</h1>
  <Card />
  <Productos titulo='Note' precio='1000' />
  <Productos titulo='Caca' precio='9000' />
  </>
)

}

export default App
