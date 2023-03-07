import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {HobbyDetails} from '../screens/HobbyDetails';

const Stack= createNativeStackNavigator();

export const StackNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Categories' component={CategoriesScreen}/>
                <Stack.Screen name = 'Details' component={HobbyDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation