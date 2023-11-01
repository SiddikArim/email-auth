import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex  justify-center mt-10' >
            <NavLink className='mr-10' to='/'>Home</NavLink>
            <NavLink className='mr-10' to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;