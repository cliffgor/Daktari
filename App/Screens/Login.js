import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Colors from '../../assets/Shared/Colors'
import { ObjectFlags } from 'typescript'
import React from 'react'
import SignInWithOAuth from '../Components/SignInWithOAuth'
import app from '../../assets/icon.png'

export default function Login() {
    return (
        <View style={{ alignItems: 'center', backgroundColor: Colors.lightGray }}>
            <Image source={app} style={styles.appIMage} />
            <View style={{ backgroundColor: Colors.white, padding: 40, alignItems: 'center', marginTop: -50, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Text style={styles.heading}>Daktari</Text>
                <Text>Your Appointment booking App</Text>
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Book Appointments faster</Text>
                <SignInWithOAuth />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    appIMage: {
        width: 300,
        height: 500,
        objectFit: 'cover',
        marginTop: 50,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#000'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginView: {
        backgroundColor: Colors.primary,
        padding: 16,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 90,
        width: Dimensions.get('screen').width * 0.8
    }
})