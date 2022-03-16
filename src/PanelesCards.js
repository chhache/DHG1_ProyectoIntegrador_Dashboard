import {useState, useEffect} from 'react';

function PanelesCards () {

    const [card, setCard] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3031/api/products')
        .then(rtaDB => rtaDB.json())
        .then(response => {
            setCard(response.data)
        })
        .catch(error => console.error(error))
    }, [])


    return (
        <>
        {
            card.filter((item, idx) => idx < 1).map((cardi, i) => {                
                return (
                <div className="card card-1" key={i}>
                     <div className="card__icon">Total de Categorías</div>
                    <h2 className="card__title">{cardi.id}</h2>
                </div>
                )
            })
        }
        </>
    )
}

export default PanelesCards;