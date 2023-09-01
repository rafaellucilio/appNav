import React from "react"
import {NavigationConteiner } from '@react-navigation/native'
import {createStackNavigator  } from '@react-navigation/stack'
import Home from '../screens/Home';
import Details from '../screens/Details';

export default function Routes(){

    const stack = createStackNavigator();

    return(

        <NavigationConteiner>

            <stack.Navigatior>

                <stack.Screen name = 'home' component ={Home}/>
                <stack.Screen name = 'details' component ={Details}/>


            </stack.Navigatior>




        </NavigationConteiner>
    )
}

