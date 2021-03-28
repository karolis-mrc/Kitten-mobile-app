import React from 'react';
import { ScrollView, Image, Text, StyleSheet } from 'react-native';

const SingleCat = ( route, props ) => {
    const { picture, name, description, } = route.route.params;

    return (
        <ScrollView style={ styles.container }>
            <Image style={ styles.image } source={{ uri: picture }} />
            <Text style={ styles.name }>{ name }</Text>
            <Text style={ styles.description }>{ description }</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    name: {
        fontSize:35,
        lineHeight: 39,
        padding: 20,
    },
    description: {
        fontSize: 23,
        lineHeight: 31,
        padding: 15
    },
});

export default SingleCat;
