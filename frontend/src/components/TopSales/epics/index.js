import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_TOPSALES_REQUEST } from '../actions/actionTypes';
import { fetchTopSalesFailure, fetchTopSalesSuccess } from '../actions/actionCreators';

export const fetchRequest = action$ => action$.pipe(
    ofType(FETCH_TOPSALES_REQUEST),
    exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/top-sales`).pipe(
        // http://localhost:7070/api/top-sales
        retry(5),
        map((o) => fetchTopSalesSuccess(o)),
        catchError((e) => of(fetchTopSalesFailure)),
    ))
);