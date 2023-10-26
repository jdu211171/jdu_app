// Import React Native and some libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNotifications } from 'reapop';

// Define a custom notification component
const Notification = ({ title, message, time }) => {
    // Use the useNotifications hook to get the notification status and actions
    const { status, dismiss } = useNotifications();

    // Define a function to format the time
    const formatTime = (time) => {
        // Convert the time string to a date object
        const date = new Date(time);

        // Get the hours and minutes
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // Add leading zeros if needed
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        // Return the formatted time
        return `${hours}:${minutes}`;
    };

    // Return the JSX for the notification component
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="warning" size={24} color="white" />
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="close" size={24} color="white" onPress={dismiss} />
            </View>
            <View style={styles.body}>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.time}>{formatTime(time)}</Text>
            </View>
        </View>
    );
};

// Define some styles for the notification component
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        elevation: 5,
    },
    header: {
        backgroundColor: '#0251B2',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    message: {
        color: 'black',
        fontSize: 16,
    },
    time: {
        color: 'gray',
        fontSize: 14,
        alignSelf: 'flex-end',
    },
});

// Export the notification component
export default Notification;
