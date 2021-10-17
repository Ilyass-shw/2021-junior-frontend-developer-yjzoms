import { PayloadAction } from '@reduxjs/toolkit';
import { costsState } from '../types';
import calculateCostProtions from '../../helpers/calculateCostProtions';

export const addItemReducer = (
  state: costsState,
  action: PayloadAction<{ name: string; net: number }>,
): void => {
  const { grossMoney, taxMoney } = calculateCostProtions(action.payload.net);

  state.costsList.push({
    id: state.numberOfItems + 1,
    name: action.payload.name,
    net: action.payload.net,
    tax: taxMoney,
    gross: grossMoney,
  });

  state.numberOfItems++;

  state.totalSum = state.costsList.reduce((prev, acc) => prev + acc.net, 0);

  state.average = state.totalSum / state.numberOfItems;
};
