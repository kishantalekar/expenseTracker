import AsyncStorage from '@react-native-async-storage/async-storage';
import {ExpenseItem} from '../components/ExpenseItem.types';

const EXPENSES_KEY = 'expenses';

export const saveExpense = async (expense: ExpenseItem) => {
  const existing = await AsyncStorage.getItem(EXPENSES_KEY);

  const expenses = existing ? JSON.parse(existing) : [];

  expenses.unshift(expense);

  await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
};

export const getExpense = async (): Promise<ExpenseItem[]> => {
  const existing = await AsyncStorage.getItem(EXPENSES_KEY);

  return existing ? JSON.parse(existing) : [];
};
