import React, {useState} from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth';
import {createCategory} from './apiAdmin';
import { Link } from 'react-router-dom';

const AddCategory = () => {
    const[name,  setName] = useState('');
    const[error, setError] = useState(false);
    const[success, setSuccess] = useState(false);

    // destructture user and token from local storage

    const {user, token} = isAuthenticated();
    const handleChange = (e) => {
        setError('')
        setName(e.target.value);
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        // make request to api to create category
        createCategory(user._id, token, {name})
        .then(data => {
            if(data.error) {

                setError(true);
            } else{
                setError('');
                setSuccess(true);
            }
        })
    };


    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input type="text" className="form-control" onChange={handleChange} 
                value={name} autoFocus required/>

            </div>

            <button className="btn btn-outline-primary">
                    Create Category
            </button>


        </form>
    );

    const ShowSuccess = () => {
        if(success) {
            return <h3 className='text-success'> {name} is created</h3>
        }
    }

    const ShowError = () => {
        if(error) {
            return <h3 className='text-danger'> Category should be unique </h3>
        }
    }

    const goBack = () => (
    <div className='mt-5'>
        <Link to='/admin/dashboard' className='text-warning'> Back to Dashboard</Link>
    </div>
    );

    return(        
    
    <Layout title = "Add a New Category" description = {`G'day ${user.name}`} >
    <div className='row feature'>
        <div className='col-md-8 offset-md-2'>
            {ShowSuccess()}
            {ShowError()}
            {newCategoryForm()}
            {goBack()}
        </div>
    </div>
</Layout>)

};

export default AddCategory;