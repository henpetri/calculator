import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    
    let lastArr = currentNumber[currentNumber.length-1];
    
    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber);
      return;
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  function handleInput(buttonPressed) {
    switch(buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'CLEAN':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + '=');
        calculator();
        return;
    }
    
  setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={styles.container}>
     
      <Text style={styles.txtRes}>{lastNumber}</Text>
      <Text style={styles.txtRes}>{currentNumber}</Text>
       
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn50}
          onPress={() => handleInput('CLEAN')}
        >
          <Text style={styles.txt}>CLEAN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('DEL')}
        >
          <Text style={styles.txt}>DEL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('.')}
        >
          <Text style={styles.txt}>.</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(1)}
        >
          <Text style={styles.txt}>1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(2)}
        >
          <Text style={styles.txt}>2</Text>       
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(3)}
        >
          <Text style={styles.txt}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('+')}
        >
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(4)}
        >
          <Text style={styles.txt}>4</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(5)}
        >
          <Text style={styles.txt}>5</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(6)}
        >
          <Text style={styles.txt}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('-')}
        >
          <Text style={styles.txt}> - </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(7)}
        >
          <Text style={styles.txt}>7</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(8)}
        >
          <Text style={styles.txt}>8</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(9)}
        >
          <Text style={styles.txt}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('*')}
        >
          <Text style={styles.txt}>*</Text>
        </TouchableOpacity>
      </View>

      <View 
        style={styles.row}
      >
        <TouchableOpacity
          style={styles.btn50}
          onPress={() => handleInput('=')}
        >
          <Text style={styles.txt}>=</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput(0)}
        >
          <Text style={styles.txt}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn25}
          onPress={() => handleInput('/')}
        >
          <Text style={styles.txt}>/</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a001a',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  btn25: {
    width: '25%',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#990099',
    alignItems: 'center',
  },
  btn50: {
    width: '50%',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#990099',
    alignItems: 'center',
  },
  txtRes: {
    fontSize: 50,
    color: '#990099',
    textAlign: 'right',
  },
  txt: {
    fontSize: 25,
    color: '#330033',
  },
});