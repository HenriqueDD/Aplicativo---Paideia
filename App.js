import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Materia from './src/pages/Materia';
import Aulas from './src/pages/Aulas';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  name="Materia" component={Materia} />
        <Drawer.Screen name="Aulas" component={Aulas} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}