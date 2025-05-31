import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ExpenseItemProps} from './ExpenseItem.types';

const ExpenseItem = ({item}: {item: ExpenseItemProps}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Amount :₹{item.amount}</Text>
      <Text style={styles.text}> Category : {item.category}</Text>
      <Text style={styles.text}>Date :{item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    // alignItems: 'center',
  },
  text: {fontSize: 16, width: 'auto'},
});

export default ExpenseItem;
