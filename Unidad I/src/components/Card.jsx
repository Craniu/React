import Boton from './Boton'
import Productos from './Productos'

const Card = () => {

    return (
        <div className='card'>
        <h2>Card</h2>
        <Productos titulo='Note' precio='1000' />
        <Boton />
        </div>
    )
}

export default Card