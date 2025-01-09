import Card from './Card'

const Productos = ({titulo, precio}) => {
  return (
    <div className="productos">
        <h1>Productos</h1>
        <h1>{titulo}</h1>
        <h3>Precio: {precio}</h3>
        <Card />
    </div>
  )
}





export default Productos