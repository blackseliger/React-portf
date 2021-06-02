import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest } from '../../reduxObservable/categories/actionCreators';
import { Link } from 'react-router-dom';


function Categories(props) {
    const { items, loading, error } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesRequest());
    }, [dispatch]);


    const handleClick = (categoryId) => {
        props.onClick(categoryId)
    }
 


    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <Link className='nav-link' to='#' onClick={() => handleClick()}>Все</Link>
            </li>
            {items.map((category) =>(
                <li className='nav-item' key={category.id}>
                    <Link className='nav-link' onClick={() => handleClick(category.id)}>{category.title}</Link>
                </li>
            ))}
        </ul>
    )
}

Categories.propTypes = {

}

export default Categories

