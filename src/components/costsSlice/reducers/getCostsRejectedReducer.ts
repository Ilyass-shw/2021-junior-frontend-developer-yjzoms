import { costsState } from '../types';

export const getCostsRejectedReducer = (state: costsState): void => {
  state.FetchStatus = 'failed';
};
export default getCostsRejectedReducer;
