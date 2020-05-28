import React from 'react';
import { View, Text ,TextInput} from 'react-native';


const UserInput=({label,placeholder,autoFocus,value,changeInput,password})=>{
    return(

        <View style={{margin:10}}>
            <Text>{label}</Text>
            <TextInput 
            autoFocus={autoFocus}
            secureTextEntry={password}
            onChangeText={(text)=>changeInput(text)}
            value={value}
            placeholder={placeholder}
            />
        </View>
    );



}

export default UserInput;