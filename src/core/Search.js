import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getCategories, list} from './apiCore'
import Card from './Card'
import "../css/style.css";


const Search = () => {

    const [data, setData] = useState({
        categories: [], 
        category: '', 
        search: '', 
        results: [], 
        searched: false
    });

    const {categories, category, search, results, searched} = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error) {
                console.log(data.error)
            }else{
                setData({...data, categories: data})
            }
        })
    }

    useEffect(() => {
        loadCategories()
    }, []);

    const searchData = () => {
        //console.log(search, category);
        if(search) {
            list({search: search || undefined, category: category})
            .then(response => {
                if(response.e) {
                    console.log(response.error)
                } else {
                    setData({...data, results: response, searched: true });
                }
            })
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault()
        searchData()
    }

    const handleChange = (name) => event => {
        setData({...data, [name]: event.target.value, searched: false });
    }

    const searchMessage = (searched, results) => {
        if(searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if(searched && results.length < 1) {
            return `No Products Found`;
        }
    }

    const searchedProducts = (results = []) => {
        return ( 
            <div className='row '>

                {results.map((product, i) => (<div className='col-3 mt-3'><Card key={i} product={product} /></div>
                
                ))}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}  >
            <div className="search-form"> 


            <div className='category-dropdown'>
                        <select
                            onChange={handleChange("category")}
                            className="category-dropdown__selector"
                        >
                            <option value="All">Categories</option>
                            {categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                
                
                
                <div>
                    

                <input type='search' 
                    onChange={handleChange('search')}
                    placeholder="Search by name"
                    className='search-input'
                />
                </div>

                <div>
                        <button type="submit" className='search-button'>Search</button>
                </div>
            </div>
        </form>
    )


    return (

        <div>
        <div className='search-bar'>

                <div className='search-headline'>
                    <span className='search-headline__main'>refurbished devices for every budget</span>
                </div>

                <div className='search-form-container'> 
                {searchForm()} 
                </div>

        </div>


        <div className="feature searched-feature">
                {searchedProducts(results)}
        </div>


        </div>

        
    );
};


export default Search; 




/*<div className='input-group-prepend'>
<select className='btn mr-2' onChange={handleChange('category')}>
    <option value='All'> Pick Category</option>
    {categories.map((c,i) => (<option key={i} value={c._id}>
        {c.name}
    </option>))}

</select>
</div>  */