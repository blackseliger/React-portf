import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { searchChangeInput } from '../../reduxObservable/search/actionCreators';

function Search({className, onSubmit, dataID = ""}) {
    
    const { searchStr } = useSelector((state) => state.search);
    
    const dispatch = useDispatch();
    const searchInput = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(searchStr);
    }


    const handleChange = (evt) => {
        dispatch(searchChangeInput(evt.target.value));
    };

    useEffect(() => {
        if (!className.includes('invisible')) searchInput.current.focus();
        return () => {};
      }, [className]);

    return (
      <form className={className} data-id={dataID} onSubmit={handleSubmit}>
          {dataID !== null ? 
               <input className='form-control' placeholder='Поиск' value={searchStr} onChange={handleChange} ref={searchInput} /> :
            //    разница вызова через Header и Catalog подумать как лучше провернуть 
               <input className='form-control' placeholder='Поиск' value={searchStr} onChange={handleChange} />
        }
      </form>
    )
}

Search.propTypes = {

}

export default Search

