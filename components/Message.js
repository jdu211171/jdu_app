import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {shadow} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Notification = ({ title, message, time }) => {
    const navigation = useNavigation();

    const handlePress = () => {
            navigation.navigate('YourPageName', { message: message }); // replace 'YourPageName' with the name of the page you want to navigate to
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container, styles.shadow]}>
                <View style={styles.flexing}>
                    <View style={styles.flexing}>
                        <Ionicons
                            name={'ellipse'}
                            size={8}
                            color={'#0386D0'}
                        />
                        <Ionicons
                            name={'information-circle-outline'}
                            size={24}
                            color={'#0386D0'}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Ionicons
                        name={'bookmark-outline'}
                        size={24}
                        color={'gray'}
                    />
                </View>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 10,
        rowGap: 8,
        backgroundColor: 'white'
    },
    flexing: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 3,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.45)',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.45,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            }
        })
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    message: {
        fontSize: 14,
    },
    time: {
        color: '#575757',
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: 400,
    }

})

export default Notification;
