function setClients(key: string, value: Client[]){
    let valueInString = JSON.stringify(value);
    localStorage.setItem(key,valueInString);
}

function getClients (key: string): Client[]{
    let value = localStorage.getItem(key);
    if(value != null){
    let valueObject = JSON.parse(value);
    return valueObject;
    }
   return [];  
 }
 
 function removeClients(key: string) {
 
     localStorage.removeItem(key);
 }
 
 
 
 export const Storage = {getClients, setClients, removeClients};
 

 function saveSessionClients(key: string, value: Client[]){
    let valueInString = JSON.stringify(value);
    localStorage.setItem(key,valueInString);
}

function getSessionClients(key: string ){
    let value = localStorage.getItem(key);
    if(value != null){
     value = JSON.parse(value);
    return value;
    }
   return " ";  
 }
 
 function removeSessionClients(key: string) {
 
     localStorage.removeItem(key);
 }

 
 export const SessionStorage = {getSessionClients, saveSessionClients, removeSessionClients};