import { Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import Appointment from '../Screens/Appointment'
import Home from '../Screens/Home.js'
import Profile from '../Screens/Profile'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false
            }
        }>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Appointment" component={Appointment}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="calendar" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
