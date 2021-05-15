import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import Colors from '../styles/colors'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Notes" component={Notes} options={{
                title:'Anotação', 
                headerStyle: { backgroundColor:Colors.header, elevation: 0 },
                }}
            />
        </Stack.Navigator>
    )
}