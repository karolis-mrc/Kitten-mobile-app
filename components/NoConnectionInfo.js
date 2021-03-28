import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoConnectionInfo = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>Internet connection is lost</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 15,
        backgroundColor: '#fa4473',
        borderRadius: 15,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
});

export default NoConnectionInfo;
