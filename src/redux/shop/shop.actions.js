import  ShopActionTypes from './shop.types';

export const updateCollections = (colltionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: colltionsMap
});