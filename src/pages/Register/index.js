import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Register(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Crie a sua conta</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                {/*  */}
                <Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    placeholder='Digite o seu nome completo'
                    style={styles.input}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um email'
                    style={styles.input}
                />
                {/*  */}
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Sua senha'
                    style={styles.input}
                />
                {/*  */}
                <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}
                onPress={()=>navigation.navigate('SignIn')}>
                    <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
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
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
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
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
    },
    registerText:{
        color:'#a1a1a1'
    }
})