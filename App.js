import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,TextInput, Button ,Alert,ImageBackground} from 'react-native';


export default function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email ,  setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <View style={styles.container}>
      
      


      <View style={styles.header}>
      <Text>Singup Page</Text>
      </View>
     <View style={styles.body}>
     
      <View style={{flexDirection:"row"}}>
      <TextInput 
      style={{borderWidth:1,width:"45%",margin:6,padding:5}} 
      placeholder="First Name"
      onChangeText={(firstname)=>setFname(firstname)}
 
      />
      <TextInput 
      style={{borderWidth:1,width:"45%",margin:6,padding:5}} 
      placeholder="Last Name"
      onChangeText={(lastname)=>setLname(lastname)}
      
      />
      </View>
      <View >
        <TextInput 
        style={{borderWidth:1,margin:6}}
        placeholder="Mobile No."
        onChangeText={(f)=>setMobile(f)}
        />
        <TextInput 
        style={{borderWidth:1,margin:6}}
        placeholder="Email Address"
        onChangeText={(emailID)=>setEmail(emailID)}
        />
        <TextInput 
        style={{borderWidth:1,margin:6}}
        placeholder="School"
        onChangeText={(s)=>setSchool(s)}
        />
        <TextInput 
        style={{borderWidth:1,margin:6}}
        placeholder="Address"
        onChangeText={(G)=>setAddress(G)}
        />
         <TextInput 
        style={{borderWidth:1,margin:6}}
        placeholder="Password"
        onChangeText={(CV)=>setPassword(CV)}
        />
      
      <View style={{flexDirection:"column",width:"25%"}}>
        
        <Button
        title="submit"
        onPress={()=>(alert(`Name  ${fname} ${lname} \nMobile No.  ${mobile} \nEmail id ${email}  \nSchool  ${school}\nAddress  ${address}  \nPassword ${password}`))}
        color={"red"}
        />
        </View>
      </View>
    
     </View>
      
      <StatusBar style="auto" />
    </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  body:{
    flex:1,
     //backgroundColor:"skyblue",
     
     justifyContent:"center",


  },
  header:{
  
    height:"12%",
    borderBottomWidth:1,
    justifyContent:"center",
    alignItems:"center",


  },
});
