/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AddExpenseScreen from './screens/AddExpenseScreen';
import ExpenseListScreen from './screens/ExpenseListScreen';

const Stack = createNativeStackNavigator();

export enum Screens {
  List = 'List',
  Add = 'Add',
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.List}>
        <Stack.Screen
          name={Screens.List}
          component={ExpenseListScreen}
          options={{
            headerTitle: 'Expense List',
          }}
        />
        <Stack.Screen
          name={Screens.Add}
          component={AddExpenseScreen}
          options={{
            headerTitle: 'Add Expense',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
