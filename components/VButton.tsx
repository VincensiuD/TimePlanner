import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function VButton(props: any){
    const {text, colour, purpose} = props;
 

    return(
        <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: colour}]} onPress={purpose} >
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 3,
        backgroundColor: 'green',
    }
});