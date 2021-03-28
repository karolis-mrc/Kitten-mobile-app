import React, { useState } from 'react';
import { View, Button, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const Filter = ( props ) => {
    const [ inputValue, setValue ] = useState( '' );

    const onChangeCountInput = ( value ) => {
        const numericRegex = /(^100$)|^[0-9]\d?$/

        if ( numericRegex.test( value )) {
            setValue( value );
        } 
    };

    return (
        <View style={ styles.centeredView }>
            <View style={ styles.modalView }>
                <Text style={ styles.modalText }>How many kittens would You like to see?</Text>

                <View style={ styles.container }>
                    <View style={ styles.buttonWrapper }>
                        <Button 
                            title='30'
                            onPress={ () => props.setFilter( 30 ) }
                        />
                    </View>

                    <View style={ styles.buttonWrapper }>
                        <Button 
                            title='50'
                            onPress={ () => props.setFilter( 50 )}
                        />
                    </View>

                    <View style={ styles.buttonWrapper }>
                        <Button 
                            title='100'
                            onPress={ () => props.setFilter( 100 )}
                        />
                    </View>
                </View>

                <Text style={ styles.modalText }>Or enter the number from 1 to 100</Text>
               
                <TextInput
                    underlineColorAndroid='transparent'
                    style={ styles.countInput }
                    placeholder='Enter your number here...'
                    keyboardType={ 'numeric' }
                    value={ inputValue }
                    onChangeText={ onChangeCountInput }
                    onSubmitEditing={ () => props.setFilter( inputValue ) }
                />

                <Pressable
                    style={[ styles.button, styles.buttonClose ]}
                    onPress={ () => props.setModalVisible( !props.modalVisible ) }
                >
                    <Text style={ styles.textStyle }>Cancel</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonWrapper: {
        flex: 1,
        padding: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    button: {
        borderRadius: 15,
        backgroundColor: '#fa4473',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 5,
        marginBottom: 15,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: 'center',
    },
    countInput: {
        height: 40,
        margin: 12,
        borderBottomWidth: 0.5,
        textAlign: 'right',
    }
});

export default Filter;
