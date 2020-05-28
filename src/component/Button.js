import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';


const Button =(props)=>{

    const {label ,onPress} =props;
    return (
        <TouchableOpacity onPress={()=>onPress()}>
         <View style={styles.containerStyle}>
            <Text style={styles.buttonDefaultStyle}>{label}</Text>
          </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({

    containerStyle:{
        padding:20,
        margin:10,
        borderColor:'grey',
        borderRadius:4,
        borderWidth:1,
        backgroundColor:'#8C84F4'
    },
    buttonDefaultStyle:{

        textAlign:'center',
        fontSize: 18,
        color:'#fff',
    }

});

export default Button;