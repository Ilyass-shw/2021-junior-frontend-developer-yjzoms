export type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

export type apiItem = {
  id: number;
  name: string;
  net: string;
  tax: string;
};
export type costsItem = {
  id: number;
  name: string;
  net: number;
  tax: number;
  gross: number;
};

export interface costsState {
  FetchStatus: fetchStatus;
  costsList: costsItem[];
  numberOfItems: number;
  totalSum: number;
  average: number;
}
