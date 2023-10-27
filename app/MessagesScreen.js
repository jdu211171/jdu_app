import {Text, View} from "react-native";
import * as React from "react";
import Notification from "../components/Message";
export default function MessagesScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 8 }}>
            <Notification
                title="Muhim xabar!!!"
                message="Farzandingiz Abduxakimov Abdulla oldingi semestrdagi qarzlari haligacha yopilmaganligi uchun JDU talabalari safidan chiqarilishi mumkin! Oxirgi ogohlantirish, zudlik bilan Kotibiyatga uchrashing. JDU talabalari safidan chiqarilish bo`yicha buyruq tayyorlandi."
                time="12:23 AM・30 Apr 2021"
            />
        </View>
    );
}