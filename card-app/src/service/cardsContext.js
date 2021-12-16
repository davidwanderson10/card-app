import { createContext, useContext, useState } from "react";
import axios from 'axios';

export const GetCard = createContext({});

export function GetCardProvider(props) {
    const [cards, setCards] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    async function getInfo() {
        let cardData = await axios.get('localhost:8080/card/view-card?id=0')
        setCards(cardData.data)
        let tagData = await axios.get('localhost:8080/card/view-tag?id=0')
        setTags(tagData.data)

        return {cardData, tagData};
    }

    return (
        <GetCard.Provider value={{searchValue, setSearchValue, getInfo, cards, tags}}>
            {props.children}
        </GetCard.Provider>
    )
}

export function useCard() {  
    return useContext(GetCard);
  }