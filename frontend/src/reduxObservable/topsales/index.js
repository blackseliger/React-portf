import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_TOPSALES_REQUEST } from './actionTypes';
import { fetchTopSalesFailure, fetchTopSalesSuccess } from './actionCreators';


export const topSalesfetchRequest = action$ => action$.pipe(
    ofType(FETCH_TOPSALES_REQUEST),
    exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/top-sales`).pipe(
        retry(5),
        map((o) => fetchTopSalesSuccess(o)),
        catchError((e) => of(fetchTopSalesFailure)),
    ))
);