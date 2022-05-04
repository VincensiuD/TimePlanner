import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
export function Table(props: any){

    let currentHour = props.hour; 
    const timeFrame = [];
    for(let i = -12; i<12; i+= 1){
        timeFrame.push(currentHour+i);
    }

    return(
        <View>
            <Text>
                {timeFrame.map(x=>x)}
            </Text>
        </View>
    );
}