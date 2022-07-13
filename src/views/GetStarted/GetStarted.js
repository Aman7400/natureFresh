import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Button } from 'react-native'
import React from 'react';
import {families, sizes} from '../../constants/fonts'

const image = require('../../../assets/images/get-started.jpeg')

export default function GetStarted() {
    return (
        <ImageBackground
            source={image}
            style={{
                flex: 1,
            }}>

                <View style={{position: 'relative',height: '100%'}}>
                <GetStartedTextContent/>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})


function GetStartedTextContent(){
    return (
        <View style={{ 
            padding:64,
            backgroundColor:'white',
            borderTopLeftRadius:120,
            borderTopRightRadius:120,
            position:'absolute',
            bottom:0,
            width:'100%',
            height:280
        }} >
            <Text style={{ 
                fontSize:sizes.heading,fontFamily:families.heading
            }}>
                Farm Fresh Fruits right at your door step
            </Text>
            <Button title="Get Started" />
        </View>
    )
}