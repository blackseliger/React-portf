import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogRequest } from '../../reduxObservable/catalog/actionCreators';
import Search from '../Search/Search';
import { searchVisibilityCatalog } from '../../reduxObservable/search/actionCreators';

export default function Header(props) {

    const [visibleInput, setVisibleInput] = useState(false);
    const {id} = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    const hideInput = () => setVisibleInput(false);
    const showInput = () => setVisibleInput(true);

    const history = useHistory();

    const handleSearch = (searchStr) => {
        dispatch(fetchCatalogRequest({
            categoryId: id,
            q: searchStr.trim(),
        }));
        searchVisibilityCatalog(true);
        hideInput();
        history.push('/catalog');

    }

    return(
       <header className='container'>
           <div className='row'>
               <div className='col'>
                   <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                       <Link className='navbar-brand' to ='/'>
                           <img src="/img/header-logo.png" alt="Bosa Noga"></img>
                       </Link>

                       <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                               <li className='nav-item'>
                                   <Link className='nav-link' to='/'>Главная</Link>
                               </li>
                               <li className='nav-item'>
                                   <Link className='nav-link' to='/catalog'>Каталог</Link>
                               </li>
                               <li className='nav-item'>
                                   <Link className='nav-link' to='/about'>О магазине</Link>
                               </li>
                               <li className='nav-item'>
                                   <Link className='nav-link' to='/contacts'>Контакты</Link>
                               </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search" 
                                        onClick={showInput} 
                                    ></div>
                                    <div className='header-controls-pic header-controls-cart'>
                                        <div className='header-controls-cart-full'></div>
                                        <div className='header-controls-cart-menu'></div>
                                    </div>
                                </div>

                                <Search onSubmit={handleSearch} dataId={'search-form'} className={`header-controls-search-form form-inline ${visibleInput ? '' : 'invisible'}`}/> 
                            </div>
                       </div>
                   </nav>
               </div>
           </div>
       </header>
    )
}