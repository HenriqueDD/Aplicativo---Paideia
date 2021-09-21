import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Progress, Heading, Link, extendTheme } from "native-base";

export default function Materia({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView
                px={90}
                _contentContainerStyle={{
                    bg: "lime.300",
                    px: "44px",
                    w: "100%",
                }} style={{ backgroundColor: 'white' }}
                height={700}
            >

                <View style={styles.cartoes}>
                    <Link _hover={{ bg: "primary.100", }} justifyContent="center" alignItems="center" isExternal mt={4} mx={4} onPress={() => navigation.navigate('Aulas',
                        {
                            materia: 'Matemática',
                            progresso: '10%',
                            data: '18/09/2021'
                        }
                    )}>

                        <Box
                            width="90%"
                            bg="gray.300"
                            p="4"
                            shadow={2}
                        >
                            <Heading size="md">Materia: Matematica</Heading>
                            <Text>Progresso: 10%</Text>
                            <Text>Data: 10 abril</Text>

                            <Progress value={45} mx="30" bg="cyan.200" mb="4" />
                        </Box>
                    </Link>
                </View>

                <View style={styles.cartao2}>
                    <Link _hover={{ bg: "primary.100", }} justifyContent="center" alignItems="center" isExternal mt={4} mx={4} onPress={() => navigation.navigate('Aulas',
                        {
                            materia: 'Biologia',
                            progresso: '60%',
                            data: '19/09/2021'
                        }
                    )}>
                        <Box
                            width="90%"
                            bg="gray.300"
                            p="4"
                            shadow={2}
                        >
                            <Heading size="md">Materia: Biologia</Heading>
                            <Text>Progresso: 60%</Text>
                            <Text>Data: 10 abril</Text>


                            <Progress value={45} mx="30"  bg="cyan.200" mb="4" />
                        </Box>
                    </Link>
                </View>
            </ScrollView>
        </NativeBaseProvider>


    )





}

const styles = StyleSheet.create({
    cartoes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150


    },

    cartao2: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8

    }

})

const theme = extendTheme({
    components: {
        Progress: {
            baseStyle: {
                color: 'black.200'

            },
            defaultProps: {},
            variants: {},
            sizes: {

            }
        }
    }
})