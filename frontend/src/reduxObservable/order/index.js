import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  map,
  exhaustMap,
  catchError,
} from 'rxjs/operators';

import { ORDER_SUBMIT_REQUEST } from './actionTypes';

import { orderSubmitFailure, orderSubmitSuccess } from './actionCreators';

export const order = (action$) => action$.pipe(
    ofType(ORDER_SUBMIT_REQUEST),
    exhaustMap((o) => {
        const data = o.payload;
        return ajax({
            url: `${process.env.REACT_APP_API_URL}/order`,
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify(data),
        }).pipe(
            map((o) => orderSubmitSuccess(o)),
            catchError((e) => of(orderSubmitFailure(e))),
        );
    }),
);
