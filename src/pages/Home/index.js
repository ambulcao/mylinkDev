import { useState } from 'react';
import { FiLink } from 'react-icons/fi'
import Img from "../../assets/pitu2.png"
import './home.css'

import Menu from '../../components/Menu'

export default function Home(){
  const [link, setLink] = useState('');

  function handleShortLink(){
    alert("MEU LINK " + link);
  }

    return(
      <div className="container-home">
        <div className="logo">
            <img className='Imglogo' src={Img} />
            <h1>PituLink</h1>
            <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
            <div>
             <FiLink size={24} color="#FFF"/>
             <input 
                placeholder='Cole seu link aqui...'
                value={link}
                onChange={ (e) => setLink(e.target.value) }
             />
            </div>

            <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu />

      </div>
    )
  }