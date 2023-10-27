import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagesScreen from "./app/MessagesScreen";
import SettingsScreen from "./app/SettingsScreen";
import BookmarksScreen from "./app/BookmarksScreen";
import LinksScreen from "./app/LinksScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Messages"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    title: 'Awesome app',
                }}
            />
            <Stack.Screen
                name="Bookmarks"
                component={BookmarksScreen}
                options={{
                    title: 'My profile',
                }}
            />
            <Stack.Screen
                name="Links"
                component={LinksScreen}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Xabarlar') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-mail' : 'ios-mail-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Saqlanganlar') {
                            return (
                                <Ionicons
                                    name={focused ? 'bookmark' : 'bookmark-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Linklar') {
                            return (
                                <Ionicons
                                    name={focused ? 'link' : 'link-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Sozlamalar') {
                            return (
                                <Ionicons
                                    name={focused ? 'settings' : 'settings-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#0251B2',
                })}
            >
                <Tab.Screen
                    name="Xabarlar"
                    component={MessagesScreen}
                    options={{
                        tabBarBadge: 99,
                        tabBarBadgeStyle: {
                            padding: 2,
                            fontSize: 10,
                            backgroundColor: '#0386D0',
                        },
                    }}
                />
                <Tab.Screen name="Saqlanganlar" component={BookmarksScreen}/>
                <Tab.Screen name="Linklar" component={LinksScreen} />
                <Tab.Screen name="Sozlamalar" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}