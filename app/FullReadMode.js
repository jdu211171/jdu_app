function YourPageName({ route }) {
    const { message } = route.params;

    return (
        <View>
            <Text>{message}</Text>
        </View>
    );
}
