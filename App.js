import Modal from "./components/Modal";
import FlatList from "./components/FlatList";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  
  
} from "react-native";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign'

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemslist, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    if (textValue === "") {
      return;
    }
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}<AntDesign name="delete" size={20} color={"red"} padding={20} /></Text>
      
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    console.log(itemSelected);
    let arr = itemslist;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  return  (
    <View style={styles.container}>
      <Text style={styles.title}>B8 Esports Torneos<AntDesign name="calendar" size={20} color={"red"} paddingLeft={120} /></Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="+ ADD" color={'#000'} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList itemslist={itemslist} renderListItem={renderListItem}/>
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#050015", //"#050015"
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 25,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 15,
    paddingLeft: 12,
    width: 200,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffff",
    borderRadius: 40,
    borderWidth: 2,
    marginTop: 40,
  },
  TextContainer: {
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    marginVertical: 10,
    width: 120,
  },
  Text: {
    fontSize: 24,
    color: "#A52A2A",
    fontweight: "bold",
  },

  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#f0fff0",
    shadowColor: "#fe6855",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem:{
    fontSize:18,
    paddingLeft:15,
    paddingRight:15,
    color:'#2f4f4f',
    fontWeight:'600',
    fontVariant:'no-common-ligatures',
  }
});
