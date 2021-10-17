import { taxRate } from '../costsSlice/constants';

export const calculateGrossMoney = (Net: number): number => Net / (1 - taxRate);

const calculateCostProtions = (
  Net: number,
): { grossMoney: number; taxMoney: number } => {
  const grossMoney = calculateGrossMoney(Net);
  const taxMoney = grossMoney * taxRate;
  return { grossMoney, taxMoney };
};

export default calculateCostProtions;
