import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_CATALOG_REQUEST } from './actionTypes';
import { fetchCatalogFailure, fetchCatalogSuccess } from './actionCreators';



export const catalog = action$ => action$.pipe(
    ofType(FETCH_CATALOG_REQUEST),
    exhaustMap((category) => {
        const categoryID = category.payload && category.payload.categoryId;
        const offSet = category.payload && category.payload.offSet;
        const q = category.payload && category.payload.q;
        const urlParams = new URLSearchParams();
        if (categoryID) urlParams.set('categoryId', categoryID);
        if (offSet) urlParams.set('offset', offSet);
        if (q && (q !== '')) urlParams.set('q', q);
        return ajax.getJSON(`${process.env.REACT_APP_API_URL}/items?${urlParams.toString()}`).pipe(
            retry(5),
            map((o) => fetchCatalogSuccess(o)),
            catchError((e) => of(fetchCatalogFailure(e))),
        );
    })
);