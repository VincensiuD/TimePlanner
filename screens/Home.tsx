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

    function navigateToTasksList(id: number){
        navigation.navigate('Task',{id})
    }

    let allClients = Storage.getClients('Client');

    return(
        <View style={styles.container}>
            <View>
                 <Text>This is the HomePage</Text>
            </View>
            <View>
                {allClients.map(x => 
                    <TouchableOpacity style={styles.card} onPress={()=>navigateToTasksList(x.id)}>
                        <Text>Id: {x.id}</Text> 
                        <Text>Title: {x.title}</Text>
                        <Text>Details: {x.description}</Text>
                        <Text>Number of Task: {x.tasks.length}</Text>
                    </TouchableOpacity>
                
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
        justifyContent:'center',
        padding: 5,
        margin: 5,
        textAlign: 'center'
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'slate',
    }
});