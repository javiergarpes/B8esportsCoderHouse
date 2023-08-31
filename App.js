import { View, TextInput, Button, StyleSheet, Text,TouchableOpacity} from "react-native";
import React, { useState } from 'react';

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemslist, setItemsList] = useState([])

  const onHandleChangeItem = text => setTextValue(text)

const addItem = ()=>{
 
  setItemsList(prevState =>[
    ...prevState,
    {id: Math.random(), value: textValue},
  ])
  setTextValue(' ')
}

/*const renderListItem=({item})=>(
  <TouchableOpacity style={styles.itemContainer}>
    <text style={style.textItem}></text>
  </TouchableOpacity>
)*/



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New Item"
          placeholderTextColor={"#808080"}
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="+ ADD" color={"black"} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        {itemslist.map((item) => (
          <View style={styles.TextContainer}>
            <Text style={styles.Text}> {item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 80,
    backgroundColor:'#e2c6ab',
    
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:'#fff',
    borderRadius:15,
    
  },
  input: {
    width:200,
    height:50,
    fontSize:15,
    paddingLeft:12,
    width: 200,
    
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ff0000",
    borderRadius:10,
    borderWidth: 2,
    marginTop: 40,
    
  },
  TextContainer: {
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
    
  },
  Text: {
    fontSize: 24,
    color: "#ff0000",
    fontweight: "bold",
    
  },
});
