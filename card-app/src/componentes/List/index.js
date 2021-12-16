import './styles.scss';
import ShowMore from './../../assets/more_horiz_black_24dp.svg';
import { useEffect, useState } from 'react';

export default function List() {
    const [next, setNext] = useState(0);
    const [gap, setGap] = useState(0);

    const getData = async (p = 0, n = 0 ) => {
        // CHAMADAS PARA A API //
        // let cardData = await axios.get('http://localhost:8080/card/view-card?id=0')
        // let tagData = await axios.get('http://localhost:8080/card/view-tag?id=0')
        let tagData = [
            {
                "id": 1,
                "name": "PALMEIRAS",
                "createdAt": "2021-12-13T00:55:38.000Z",
                "updatedAt": "2021-12-13T00:55:38.000Z"
            },
            {
                "id": 2,
                "name": "FORTALEZA",
                "createdAt": "2021-12-13T00:55:49.000Z",
                "updatedAt": "2021-12-13T00:55:49.000Z"
            },
            {
                "id": 7,
                "name": "BASQUETE",
                "createdAt": "2021-12-13T01:23:53.000Z",
                "updatedAt": "2021-12-13T01:23:53.000Z"
            }
        ]

        let cardData = [
            {
                "id": 1,
                "texto": "bla bla bla",
                "data_criacao": "2021-12-11T23:27:39.000Z",
                "data_modificacao": "2021-12-11T23:27:39.000Z",
                "tags": "PALMEIRAS",
                "createdAt": "2021-12-11T23:27:39.000Z",
                "updatedAt": "2021-12-11T23:27:39.000Z"
            },
            {
                "id": 4,
                "texto": "06990859342",
                "data_criacao": null,
                "data_modificacao": null,
                "tags": "BASQUETE",
                "createdAt": "2021-12-12T04:14:16.000Z",
                "updatedAt": "2021-12-12T04:14:16.000Z"
            },
            {
                "id": 9,
                "texto": "abc",
                "data_criacao": "2021-12-13T04:34:06.000Z",
                "data_modificacao": "2021-12-13T04:34:06.000Z",
                "tags": "",
                "createdAt": "2021-12-13T04:34:06.000Z",
                "updatedAt": "2021-12-13T04:34:06.000Z"
            }
        ]

        let cardsMap = await cardData.map(e => {
            let tagName = tagData.find(element => element.id === e.tags)
            
            let DataAllCards = {
                key: e.id,
                texto: e.texto,
                dataCriacao: e.data_criacao,
                dataModificacao: e.data_modificacao,
                tag: e.tags
            }

            return DataAllCards;
        }) 
    }

    function handleLoadPublications() {
        setNext(next + gap);

        getData(next, next + gap)
    }

    useEffect(() => {
        getData()
    })

    return(
        <div className="main_content">
            <h2>Feed de <strong>Insights</strong></h2>

            {/* {publication.filter(element => {
                if (element === '') {
                    return element
                }else if (element.texto.includes(searchValue)) {
                    return element
                }
            }).map(publi => {
                return (
                    <div className="card" key={publi.key}>
                        <p>{publi.texto}</p>
                        {publi.tag === '' ?
                            ''
                            :
                            <button>{publi.tag}</button>
                        }
                    </div>
                )
            })} */}

            <button className="load_content" onClick={handleLoadPublications}>
                <img src={ShowMore} alt="exebir mais" />
                <span>Toque para exibir mais insights</span>
            </button>

        </div>
    )
}