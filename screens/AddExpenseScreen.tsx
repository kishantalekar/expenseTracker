import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {saveExpense} from '../utils/storage';

const AddExpenseScreen = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = async () => {
    if (!amount || !category || !date) {
      Alert.alert('Please enter the requrired field');
      return;
    }

    const item = {
      id: Date.now().toString(),
      amount,
      category,
      date: date.toDateString(),
    };
    try {
      await saveExpense(item);

      navigation.goBack();
    } catch (error) {
      console.log('failed to add item', error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="numeric"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={text => setCategory(text)}
        placeholderTextColor={'black'}
      />
      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
          padding: 8,
        }}>
        <Text>
          {date ? `Selected Date: ${date.toDateString()}` : ' Select a date'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(_, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            } else {
              setDate(new Date());
            }
          }}
        />
      )}

      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  input: {
    color: 'black',
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
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

export default AddExpenseScreen;
