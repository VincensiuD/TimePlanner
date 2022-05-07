import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.banner, styles.header]}>
        <Text style={styles.bannerText}>MY APP</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>1</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.cell, {backgroundColor: '#D7D2FA'}]}>
            <Text style={styles.cellText}>2</Text>
          </View>
          <View style={[styles.cell, {backgroundColor: '#CAC3F8'}]}>
            <Text style={styles.cellText}>3</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.cell, {backgroundColor: '#BDB4F7'}]}>
            <Text style={styles.cellText}>4</Text>
          </View>
          <View style={[styles.cell, {backgroundColor: '#B0A4F5'}]}>
            <Text style={styles.cellText}>5</Text>
          </View>
          <View style={[styles.row, styles.vertical]}>
            <View style={[styles.cell, {backgroundColor: '#A395F3'}]}>
              <Text style={styles.cellText}>6</Text>
            </View>
            <View style={[styles.cell, {backgroundColor: '#9586F1'}]}>
              <Text style={styles.cellText}>7</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'darkblue',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
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
  cellText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  vertical: {
    flexDirection: 'column',
  },
});