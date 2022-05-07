import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import { Storage } from "../components/services/dataStorage";
import { VButton } from "../components/VButton";

export function Home(props:any){

    const {navigation} = props;

    function navigateToAddClientPage(){
        navigation.push('AddClient')
    }

    let allClients = Storage.getClients('Client');

    return(
        <View>
            <View>
                 <Text>This is the HomePage</Text>
            </View>
            <View>
                {allClients.map(x => 
                    <View style={styles.card}>
                        <Text>Id: {x.id}</Text> 
                        <Text>Title: {x.title}</Text>
                        <Text>Details: {x.description}</Text>
                        <Text>Number of Task: {x.tasks.length}</Text>
                    </View>
                
                )}
            </View>      
            <View>
                <VButton purpose={navigateToAddClientPage} text="Add Client" colour='green'/>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    card:{
        borderColor: 'red',
        backgroundColor: 'pink',
        justifyContent:'center'
    }
});