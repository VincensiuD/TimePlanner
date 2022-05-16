import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { Storage } from "../components/services/dataStorage";
import { useState } from "react";
import {VButton} from "../components/VButton"
import { tsTypeAliasDeclaration } from "@babel/types";


function findClientById(allClients:Client[],id:number): Client{

    let client = allClients.find(x => x.id === id)

    if(client != undefined){
        return(client);
    }

    return {} as Client;
}


function updateClients(index:number, clientsArray:Client[], selectedClient:Client, newTasks:Task[]): Client[]{

    let newClientObject: Client = {
        id: selectedClient.id,
        title: selectedClient.title,
        description: selectedClient.description,
        tasks: newTasks
    }

    clientsArray.splice(index,1,newClientObject);

    return clientsArray;
}

export function Task({route,navigation}){    

   
    const {id} = route.params;
    const allClients:Client[] = Storage.getClients('Client');
    
    let selectedClient: Client = findClientById(allClients,id);

    const index = allClients.findIndex(object => {
        return object.id === id;
      });

    let {tasks} = selectedClient;

    if(tasks == undefined){
        tasks = [];
    }

   
    let [title, setTitle] = useState<string>("");
    let [time,setTime] = useState<number>(0);

    let [bgColour,setBgColour] = useState<string>("pink");


    function saveTitle(event:any){
        let newTitle:string = event.target.value;
        setTitle(newTitle);
    }

    function saveTime(event:any){
        let newTime:number = event.target.value;
       // let newTime:Date = newTimeString
        setTime(newTime);
    }



    function saveTask(){

        let newTask: Task = {
            title: title,
            time: time,
            commenced: false,
            completed: false,
        }
        
        let newTasks = [...tasks, newTask]

        let newClients = updateClients(index,allClients,selectedClient,newTasks);
        Storage.setClients("Client",newClients);

       navigation.push('Task',{id});
    }

    function flipBoolean(status:boolean){

        return !status;
    }

 

    function changeStatus(task: Task){

        if(!task.completed && task.commenced){
            task.completed = true;
         
        }
        else if(!task.completed && !task.commenced){
            task.commenced = true;
        
        }       
        else if(task.commenced && task.completed){
            task.commenced = false;
            task.completed = false;
      
        }
        let updatedClients = updateClients(index,allClients,selectedClient,tasks);

        Storage.setClients("Client",updatedClients);

        navigation.push('Task',{id});
    }

    return(
        <View>
            <View>
                {tasks.map(x=>
                    <TouchableOpacity style={[styles.card,{backgroundColor: x.completed? "grey" : "yellow"}]} onPress={()=>changeStatus(x)}>
                        <Text>Title: {x.title}</Text>
                        <Text>Time: {(x.time).toString()}</Text>
                        <Text>Commenced: {(x.commenced).toString()}</Text>
                        <Text>Completed: {(x.completed).toString()}</Text>
                    </TouchableOpacity>               
                    )}
            </View>
            <View>
                <Text>
                    Add Task
                </Text>
                <Text>Title</Text>
                 <TextInput style={styles.textInput} onChange={saveTitle}/>
                 <Text>Time</Text>
                 <TextInput style={styles.textInput} onChange={saveTime}/>
            </View>
            <VButton text="Save Task" colour="blue" purpose={saveTask}/>
        </View>       
    );
}


const styles = StyleSheet.create({
    textInput:{
        backgroundColor: 'grey',
        borderWidth: 2,
        borderRadius: 2,
        padding: 5,
    },
    card:{
        borderColor: 'red',
        borderWidth: 3,
      //  backgroundColor: 'yellow',
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

