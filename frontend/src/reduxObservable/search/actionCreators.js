import { SEARCH_CHANGE_INPUT, SEARCH_VISIBILITY_CATALOG } from "./actionTypes";

export const searchChangeInput = (items) => ({
    type: SEARCH_CHANGE_INPUT, payload: { items }
})

export const searchVisibilityCatalog = (bool) => ({
    type: SEARCH_VISIBILITY_CATALOG, payload: { bool }
});