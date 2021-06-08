import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { actualCategoriesID, fetchCatalogRequest } from '../../reduxObservable/catalog/actionCreators';
import CardList from '../CardList/CardList';
import Categories from '../Categories/Categories';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import { searchChangeInput } from '../../reduxObservable/search/actionCreators';
// import { actualCategoriesID } from '../../reduxObservable/categories/actionCreators';

function Catalog(props) {
    const { items, loading, error, actualCount, id } = useSelector((state) => state.catalog);
    const { searchStr, visibility } = useSelector((state) => state.search);
    const [actualCategory, setActualCategory] = useState();
    const dispatch = useDispatch();

    const catalogStyle = 'card catalog-item-card'
    // стили для каталога, без них ломается список
    useEffect(() => {
        dispatch(fetchCatalogRequest());
    }, [dispatch]);


    const handleClick = (categoryId) => {
        setActualCategory(categoryId);
        dispatch(actualCategoriesID(actualCategory));
        // приходит с опозданием если юзать любые стейты, быстро работает с исходным аргументом handleClick
        // способ перекидывать categoryId в стейт и потом вытаскивать его и юзать fetchCatalogRequest плохо работает
        // fetchCatalogRequest берет из стейта состояние которое еще не успело обновится.. нужно понять как исправлять ситуацию
        console.log(id);
        dispatch(fetchCatalogRequest({
            categoryId: categoryId,
        }))
    }

    const handleMore = () => {
        dispatch(fetchCatalogRequest({
            categoryId: actualCategory,
            offSet: items.length,
            q: searchStr.trim(),
        }))
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(fetchCatalogRequest({
            categoryId: actualCategory,
            q: searchStr.trim(),
        }))
    }

    const handleChange = (evt) => {
        dispatch(searchChangeInput(evt.target.value));
    };
 
    // const classNameSearchCatalog = 'catalog-search-form form-inline';


    return (
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {!visibility && (
                    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
                    <input className="form-control" placeholder="Поиск" value={searchStr} onChange={handleChange} />
                  </form>
                )}
                 <Categories onClick={handleClick}/>
                 {loading && <Loader/>}
                 <CardList items={items} catalogStyle={catalogStyle}/>
                 {((!loading && !error) && (items.lenght === 0)) && (<h2 className='text-center'>Ничего не найдено</h2>)}
                 {(!loading && !error) && (actualCount === 6) && (
                    //  если пришло меньше 6, кнопка исчезает
                     <div className='text-center'>
                         <button type='button' className='btn btn-outline-primary' onClick={handleMore}>Загрузить ещё</button>
                     </div>
                 )}
            </section>
        </> 
    )
}

Catalog.propTypes = {
    

}

export default Catalog

