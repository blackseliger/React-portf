import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {FETCH_ITEM_PRODUCT_REQUEST} from './actionTypes';
import { fetchItemProductFailure, fetchItemProductSuccess } from './actionCreators';

export const itemProduct = action$ => action$.pipe(
    ofType(FETCH_ITEM_PRODUCT_REQUEST),
    exhaustMap((item) =>{
        const itemID = item.payload && item.payload.id;
        return ajax.getJSON(`${process.env.REACT_APP_API_URL}/items/${itemID}`).pipe(
            retry(5),
            map((o) => fetchItemProductSuccess(o)),
            catchError((e) => of(fetchItemProductFailure(e))),
        );
    })
);