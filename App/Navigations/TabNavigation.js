import { Text, View } from 'react-native'

import Appointment from '../Screens/Appointment'
import Home from '../Screens/Home.js'
import Profile from '../Screens/Profile'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Appointment" component={Appointment} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
