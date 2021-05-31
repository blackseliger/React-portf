import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_CATALOG_REQUEST } from './actionTypes';
import { fetchCatalogFailure, fetchCatalogSuccess } from './actionCreators';


export const catalog = action$ => action$.pipe(
    ofType(FETCH_CATALOG_REQUEST),
    exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/items`).pipe(
        // exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/categories`).pipe(
        retry(5),
        map((o) => fetchCatalogSuccess(o)),
        catchError((e) => of(fetchCatalogFailure)),
    ))
);