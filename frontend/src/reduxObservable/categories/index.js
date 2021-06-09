import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_CATEGORIES_REQUEST } from './actionTypes';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from './actionCreators';

export const categories = action$ => action$.pipe(
    ofType(FETCH_CATEGORIES_REQUEST),
    exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/categories`).pipe(
        retry(5),
        map((items) => fetchCategoriesSuccess(items)),
        catchError((e) => of(fetchCategoriesFailure)),
    ))
);

