import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import { Storage } from "../components/services/dataStorage";

export function Home(props: any){

    const[id,setId] = useState<number>(0);
    const[title,setTitle] = useState<string>("");
    const[desc,setDesc] = useState<string>("");

    const {navigation} = props;

    function saveId(event:any){
        let newId:number = event.target.value;
        setId(newId);
    }

    function saveTitle(event:any){
        let newTitle:string = event.target.value;
        setTitle(newTitle);
    }

    function saveDesc(event:any){
        let newDesc:string = event.target.value;
        setDesc(newDesc);
    }

    function saveClient(){
        let newClient:Client =
        {
            id : id,
            title: title,
            description: desc,
            tasks: []
        }

        let existingClients = Storage.getClients('Client');
        let newClients = [...existingClients,newClient]
        Storage.setClients('Client',newClients);
    }

    function onAboutPress(){

    }
    return(
        <View>
            <Text>Home Screen</Text>
            
            <View>
                <View style={styles.viewFlex}>
                 <Text>Id</Text>
                 <TextInput style={styles.textInput} onChange={saveId}/>
                </View>
                <View style={styles.viewFlex}>
                 <Text>Title</Text>
                 <TextInput  style={styles.textInput} onChange={saveTitle}/>
                </View>
                <View style={styles.viewFlex}>
                 <Text>Description</Text>
                 <TextInput  style={styles.textInput} onChange={saveDesc}/>
                </View>
                <View style={styles.viewFlex}>
                    <TouchableOpacity onPress={saveClient}>
                        <Text style={styles.button}>Save Client</Text>
                    </TouchableOpacity>
                </View>
               
                
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: 'grey',
    },
    textLabel:{
        flex:1
    },
    viewFlex:{
        flexDirection: 'row',
        flex: 1,
    },
    button:{
        backgroundColor:'green'
    }
})