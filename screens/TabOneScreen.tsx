import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Table } from '../components/VTable';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();



  return (
    <View style={styles.container}>
      <View>
        <Text>Time Planner</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>

        </View>
      </View>
      <Text>{date} - {month} - {year}</Text>
      <Text>{hour} : {minute}</Text>
      <Table/>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E5E1FC',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
