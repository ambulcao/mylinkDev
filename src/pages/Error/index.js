
import './error.css'
import {Link} from 'react-router-dom'
import ImgNotFound from '../../assets/notfound.png'

export default function Error() {
    return (
        <div className='container-error'>
            <img className="notfound" src={ImgNotFound} alt="Pagina nao encontrada" />
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para a home
            </Link>
        </div>
    )
}