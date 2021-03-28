import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ListItem = ( props ) => {
    return (
        <TouchableWithoutFeedback onPress={ () => props.navigate( 'SingleView', { picture: props.cat.picture, name: props.cat.name, description: props.cat.description } )}>
            <View style={ styles.container }> 
                <Image style={ styles.image } source={{ uri: props.cat.picture }} />
                
                <Text  style={ styles.text }>
                    { props.cat.name }
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#bcbbbd',
        borderRadius: 15,
    },
    image: {
        padding: 15,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 25,
    }
});

export default ListItem;
