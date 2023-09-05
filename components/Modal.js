import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const Modal = ({modalVisible,onHandleDelete}) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text>Mi Modal</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Estas seguro de eliminar este Torneo de la Lista?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="confirmar"
              color={"white"}
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalTitle: {
    backgroundColor: "#fffff0",
    color: "#fff",
    fontSize: 18,
  },

  modalMessage: {
    marginBottom: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  modalButton: {
    marginTop: 1,
    backgroundColor: "black",
    borderRadius: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fffff0",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#2f4f4f",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
