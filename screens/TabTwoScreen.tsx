import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Storage } from '../components/services/dataStorage';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './TabOneScreen';

export default function TabTwoScreen() {

  const [clientsArray,setClientsArray] = useState<Client[]>([]);
  const nav = useNavigation();

  function addNewClient(){

  }



  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() =>
          nav.navigate('NotFound')
        }>
        <Text>Add Client</Text>
      </TouchableOpacity> 
     
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
