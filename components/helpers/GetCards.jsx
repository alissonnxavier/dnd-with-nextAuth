import { useEffect, useState } from "react";
import axios from "axios";

export default function GetCards() {

    const [cards, setCards] = useState([]);

    async function request() {

        useEffect(() => {
            let res = axios.post('api/getcards', {
                message: 'hi everyone'
            }).then((response) => { setCards(response) })
        }, [setCards]);

    }

    request();
    return cards;
}

