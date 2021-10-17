import { costsState, apiItem } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { calculateGrossMoney } from '../../helpers/calculateCostProtions';

export const getCostsFulfilledReducer = (
  state: costsState,
  action: PayloadAction<{ items: apiItem[] }>,
): void => {
  state.FetchStatus = 'succeeded';

  const itemsList = action.payload.items.map((item) => ({
    ...item,
    gross: calculateGrossMoney(parseInt(item.net)),
    net: parseInt(item.net),
    tax: parseInt(item.tax),
  }));

  state.costsList = itemsList;

  state.numberOfItems = state.costsList.length;

  state.totalSum = state.costsList.reduce((prev, acc) => prev + acc.net, 0);

  state.average = state.totalSum / state.numberOfItems;
};
export default getCostsFulfilledReducer;
