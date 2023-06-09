import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'




const Home = () => {

    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else{
                setProductsBySell(data)
            }
        })
    }

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else{
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);




    return (

        <Layout title='Home Page' description='Node React E-commerce App'>

    
            <div className='feature'>

                <h2 className="mb-4 feature__title">trending</h2>


                <div className='row'>
                        {productsBySell.map((product, i) => (
                            <div key={i} className='col-3 mb-3' > 
                                <Card product={product}/>
                            </div>
                        ))}
                </div>

 



            <h2 className="mb-4 feature__title"> new arrivals </h2>


                <div className='row'>
                    {productsByArrival.map((product, i) => (
                    <div key={i} className='col-3 mb-3'> 
                    <Card product={product}/>
                    </div>                
                    ))}
                </div>

        </div>


        </Layout>
    );
};



export default Home;