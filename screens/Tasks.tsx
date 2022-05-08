import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { Storage } from "../components/services/dataStorage";
import { useState } from "react";
import {VButton} from "../components/VButton"


function findClientById(allClients:Client[],id:number): Client{

    let client = allClients.find(x => x.id === id)

    if(client != undefined){
        return(client);
    }

    return {} as Client;
}


function updateClients(index:number, tasksArray:Client[], newObject:Client): Client[]{

    tasksArray.splice(index,1,newObject);

    return tasksArray;
}

export function Task({route,navigation}){    

   
    const {id} = route.params;
    console.log(id);
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

        let newClientObject: Client = {
            id: selectedClient.id,
            title: selectedClient.title,
            description: selectedClient.description,
            tasks: newTasks
        }

        let newClients =  updateClients(index,allClients,newClientObject);
        
        Storage.setClients("Client",newClients);

       navigation.navigate('Task',{id});
    }

    return(
        <View>
            <View>
                {tasks.map(x=>
                    <View style={styles.card}>
                        <Text>Title: {x.title}</Text>
                        <Text>Time: {(x.time).toString()}</Text>
                        <Text>Commenced: {x.commenced}</Text>
                        <Text>Completed: {x.completed}</Text>
                    </View>               
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
        backgroundColor: 'yellow',
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

