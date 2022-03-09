import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Olá,nome</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                {/*  */}
                <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff'
    },
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    button:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius:5,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
})