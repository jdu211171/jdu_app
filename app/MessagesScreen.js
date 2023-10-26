import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function MessagesScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', }}>
            <Text>Barcha xabarlar!</Text>
            <View style={{borderWidth: 1, borderStyle: "solid", borderColor: "red", width: "100%"}}>
                <View style={ styles.topPart }>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons
                            name={'ellipse'}
                            size={10}
                            color={'#0386D0'}
                        />
                        <Ionicons
                            name={'information-circle-outline'}
                            size={24}
                            color={'#0386D0'}
                        />
                    </View>
                    <View>
                        <Ionicons
                            name={'bookmark-outline'}
                            size={24}
                            color={'#0386D0'}
                        />
                    </View>
                </View>
                <View style={{ height: 'fit-content', width: "100%", }}>
                    <Text>
                        This is a reminder of your outstanding debts from the previous semester at JSU. It is important
                        to resolve this issue immediately as it may affect your student status. As soon as possible to
                        discuss this matter, the Secretariat...
                    </Text>
                </View>
                <View style={{ height: 'fit-content', width: "100%", }}>
                    <Text>10:13 AM・30 May 2021</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topPart: {
        height: 'fitContent',
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})