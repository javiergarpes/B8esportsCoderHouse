import { StyleSheet, Text, View,FlatList as FlatLista} from 'react-native'
import React from 'react'

const FlatList = ({itemslist,renderListItem}) => {
  return (
    <FlatLista
    data={itemslist}
    renderItem={renderListItem}
    keyExtractor={item => item.id}
  />
  )
}

export default FlatList

const styles = StyleSheet.create({})