import React from "react";
import { View,  Text } from 'react-native';

export default function Aulas({ route }) {
    return (
        <View style={{marginTop:60}}>
            <Text>Matéria: {route.params?.materia} </Text>
            <Text>Progresso: {route.params?.progresso}</Text>
            <Text>Data Atual: {route.params?.data} </Text>
        </View>
    )
}