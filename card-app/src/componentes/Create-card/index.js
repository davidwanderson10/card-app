import { useEffect, useState } from 'react';
import './styles.scss';
import CloseBlack from '../../assets/close_black_24dp.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Back from '../../assets/arrow_back_black_24dp.svg';
import { requiredAttributes } from '../../../src/utils/validate'


export default function CreateCard() {
    const [insight, setInsight] = useState('');
    const [category, setCategory] = useState('');
    const [selected, setSelected] = useState('');
    const [tag, setTag] = useState('');

    const handleCardList = async body => {

        const required = await requiredAttributes([
            "texto"
        ], body)
    
        if ( required.count ) {
            return { success: false, required, data: [] }
        } else {

            const data = await axios.post('localhost:8080/card/create-card', {
                firstName: body.texto,
                tags: body.tag ? body.tag : ''
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            setInsight('');
            setSelected('');

        }
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <div>
                <div className="header_create">
                    <Link to="/">
                        <button>
                            <img src={Back} alt="Voltar" />
                        </button>
                    </Link>
                    <div>
                        <h2>CRIAR <strong>INSIGHT</strong></h2>
                        
                    </div>
                </div>     
            </div>
            <div className="create_card">
                <form className="content">
                    <span>INSIGHT</span>
                    <textarea maxLength='400' cols="30" rows="10" placeholder="Escreva aqui o seu insight..." value={insight} onChange={e => setInsight(e.target.value)} />
                    <span className="max_char">limite de caracteres: 400</span>

                    <span className="category">CATEGORIA</span>
                    {selected ?
                        <div className="category-area">
                            <div className="picked-category">
                                <span>
                                    {selected}
                                </span>
                                <img src={CloseBlack} alt="Desmarcar_item" onClick={e => setSelected('')} />
                            </div>
                        </div>
                        :
                        <textarea placeholder="Adicione uma categoria (opcional)..." value={category} onChange={e => setCategory(e.target.value)} />
                    }
                    
                    <ul>
                        {
                            //construir cards
                        }
                    </ul>
                </form>
                        
                <div className="bt_area">
                    <div className="publish">
                        <button onClick={handleCardList} >PUBLICAR</button>
                    </div>
                </div>
            </div>
        </div>    
    )
}