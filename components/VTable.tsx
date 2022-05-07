import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
export function Table() {
  const currentDate: Date = new Date();
  let currentHour: number = currentDate.getHours();
  const timeFrame: number[] = [];

  for (let i = -6; i < 6; i += 1) {
    let subsequentHour = currentHour + i;
    if (subsequentHour > 23) {
      subsequentHour = -24;
    } else if (subsequentHour < 0) {
      subsequentHour = +23;
    }
    timeFrame.push(subsequentHour);
  }

  return(
      <View>
        <View style={styles.tableRow}>      
          {timeFrame.map(x => 
          <View style={styles.cells}>
          <Text >
           {x}
          </Text>
          </View>
            )}
        </View>
        <View>
            
        </View>

      </View>
  );

}

const styles = StyleSheet.create({
  tableRow: {
    flex: 12,
    flexDirection: "row",
    backgroundColor: "yellow",
    padding: 20
  },
  cells: {
      flex: 1,
    backgroundColor: "red",
  },
  tester2: {
    backgroundColor: "pink",
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
});
