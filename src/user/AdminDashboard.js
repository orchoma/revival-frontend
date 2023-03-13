import React from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom'

const AdminDashboard = () => {

    const{user: {_id, name, email, role}} = isAuthenticated()

    const adminLinks = () => {
        return (
            <div className='card w-75'>
                <h4 className='card-header medium-text'> Admin Links </h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='admin-link' to='/create/category'> Create Category</Link>
                    </li> 
                    <li className='list-group-item'>
                        <Link className='admin-link' to="/create/product"> Create Product </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='admin-link' to="/create/option"> Create Product Option </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='admin-link' to="/admin/orders"> View Orders </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='admin-link' to="/admin/products"> Manage Products </Link>
                    </li>
                </ul>
            </div>
        )
    };

    const adminInfo = () =>{
        return(
            <div className='card mb-5'>
                <h3 className='card-header'> User Information</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>{name}</li>
                    <li className='list-group-item'>{email}</li>
                    <li className='list-group-item'>{role === 1 ? 'Admin' : 'Registered User'}</li>
                </ul>
            </div>
        );
    };

    return (
        <Layout title = "Dashboard" description = {`G'day ${name}`} >
            <div className='feature'>
                <div className='col-9'>
                    {adminLinks()}
                </div>
                <div className='col-9'>
                    {adminInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard;