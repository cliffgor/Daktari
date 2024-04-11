import { Button, Text, View } from 'react-native'

import Header from '../Components/Home/Header';
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
    const { isLoaded, signOut } = useAuth();
    return (
        <View style={{padding:20, marginTop:20}}>
            {/* <Button title="Sign Out" onPress={() => signOut()} /> */}
            <Header />
            <Text>Home</Text>
        </View>
    )
}
