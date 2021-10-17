import { costsState } from '../types';

export const getCostsPendingReducer = (state: costsState): void => {
  state.FetchStatus = 'Loading';
};
export default getCostsPendingReducer;
