import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Screens} from '../App';
import ExpenseItem from '../components/ExpenseItem';
import {ExpenseItemProps} from '../components/ExpenseItem.types';
import {getExpense} from '../utils/storage';

interface ExpenseListScreenInterface {
  navigation: NativeStackNavigationProp<any>;
}
const ExpenseListScreen = ({navigation}: ExpenseListScreenInterface) => {
  const [expenses, setExpenses] = useState<ExpenseItemProps[]>([]);

  const loadExpenses = async () => {
    const data = await getExpense();
    setExpenses(data);
  };
  useEffect(() => {
    const subscribe = navigation.addListener('focus', loadExpenses);

    return subscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.Add)}
          style={styles.button}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
        <FlatList
          style={{paddingTop: 20}}
          contentContainerStyle={{
            justifyContent: 'center',
            gap: 10,
          }}
          data={expenses}
          renderItem={({item}) => <ExpenseItem item={item} />}
          ListEmptyComponent={() => (
            <View>
              <Text>No Expenses added yet</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#FA6607',
    height: 40,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});
export default ExpenseListScreen;
