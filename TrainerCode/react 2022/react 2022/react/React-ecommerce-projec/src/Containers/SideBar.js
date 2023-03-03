import React from 'react';
import BasketCart from './BasketCart';
import Search from './Search';
import Categories from './Categories';

export const SideBar = ()=>{
    return(
        <div>
            <div className="heading">React-Redux Ecommerce App by <br/>DSR Murthy</div>
            <BasketCart/>
            <Search/>
            <Categories/>
            <div className="footer">Copyright reserved to Murthy</div>
        </div>
    );
};