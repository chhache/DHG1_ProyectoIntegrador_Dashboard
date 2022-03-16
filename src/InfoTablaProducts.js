import {useState, useEffect} from 'react';

function InfoTablaProducts () {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        // fetch('https://rickandmortyapi.com/api/character')
        fetch('http://localhost:3031/api/products')
        .then(rtaDB => rtaDB.json())
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error(error))
    }, [])


    return (
    <>
        {
            products.filter((item, idx) => idx < 10).map((product, i) => {
             return(
                 <thead className='columnas-info' key={i}>
                <tr>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th>{product.price}</th>
                    <th>{product.color}</th>
                    <th>{product.size}</th>                    
                </tr>
            </thead>
             )           

            })     
        }
    </>
    )
}

export default InfoTablaProducts;