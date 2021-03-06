import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon
} from 'native-base';

import Materia from './src/pages/Materia'
import Aulas from './src/pages/Aulas'
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <HStack alignItems="center" mt="6">
      <Pressable onPress={() => props.navigation.toggleDrawer()} position="absolute" ml="2" zIndex="1">
        <HamburgerIcon ml="2" size="sm"/>
      </Pressable>
      <Center flex={1} >
        <Heading size="md">{props.route.name}</Heading>
      </Center>
    </HStack>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case 'Materia':
      return "book"
    case 'Aulas':
      return 'minus'
    case 'Favorites':
      return 'heart'
    case 'Archive':
      return 'archive'
    case 'Trash':
      return 'trash-can'
    case 'Spam':
      return 'alert-circle'
    default:
      return undefined
  }
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
    <VStack space="6" my="2" mx="1">
      <Box px="4">
        <Text bold color="gray.700">Mail</Text>
        <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">john_doe@gmail.com</Text>
      </Box>
    <VStack divider={<Divider />} space="4">
      <VStack space="3">
        {props.state.routeNames.map((name, index) => (
            <Pressable
              px="5"
              py="3"
              rounded="md"
              bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
              onPress={(event) => {
                props.navigation.navigate(name);
              }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                  color={index === props.state.index ? 'primary.500' : 'gray.500'}
                  size="5" as={<MaterialCommunityIcons name={getIcon(name)}/>}  />
                  <Text fontWeight="500" color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                  {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1} >
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Materia" component={Component, Materia} />
      <Drawer.Screen name="Aulas" component={Component, Aulas} />
      <Drawer.Screen name="Favorites" component={Component} />
      <Drawer.Screen name="Archive" component={Component} />
      <Drawer.Screen name="Trash" component={Component} />
      <Drawer.Screen name="Spam" component={Component} />
    </Drawer.Navigator>
    </Box>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}