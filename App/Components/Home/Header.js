import { Image, Text, View } from 'react-native'

import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const { isLoaded, isSignedIn, user } = useUser()
    if (!isLoaded || !isSignedIn) {
        return null
    }
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row',gap:7,alignItems:'center' }}>
                <Image source={{ uri: user.imageUrl }} style={{ width: 45, height: 45, borderRadius: 25 }} />
                <View>
                    <Text>Welcome,😊</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.fullName}</Text>
                </View>
            </View>
        </View>
    )
}