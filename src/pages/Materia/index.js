import React from "react";
import { View, Text, SafeAreaView, SectionList } from 'react-native';




export default function Materia({ navigation }) {
    return (
        <View>
            
            <View style={{ marginTop: 60 }}>
                <Text>Materia: Matematica</Text>
                <Text>Progresso: 10%</Text>
                <Text>Data: 10 abril</Text>
                <Text onPress={() => navigation.navigate('Aulas',
                {
                    materia: 'Matemática',
                    progresso: '10%',
                    data: '18/09/2021'
                }
                )}> Ir para Aulas</Text>

            </View>

            <View>
                <Text style={{marginTop:20}}>Materia: Biologia</Text>
                <Text>Progresso: 60%</Text>
                <Text>Data: 10 abril</Text>
                <Text onPress={() => navigation.navigate('Aulas',
                {
                    materia: 'Biologia',
                    progresso: '60%',
                    data: '19/09/2021'
                }
                )}> Ir para Aulas</Text>

            </View>
            
        </View>
    )
}