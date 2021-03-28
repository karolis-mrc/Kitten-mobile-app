import React, { useEffect, useState } from 'react';
import { View, Modal, FlatList, Text, Pressable, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import Filter from '../components/Filter';
import ListItem from '../components/ListItem';
import NoConnectionInfo from '../components/NoConnectionInfo';

const namesArray = [ 'Felix The Cat', 'Tom', 'Leopold', 'Brownie', 'Leo', 'Lucy', 'Bella', 'Grumpy', 'Milky', 'Garfield', 'Scratchy', 'Sylvester'];

const HomeScreen = ({ navigation }) => {
    const [ modalVisible, setModalVisible ]  = useState( false );
    const [ catData, setData ]               = useState( [] );
    const [ loading, setLoading ]            = useState( false );
    const [ isConnected, setConnectedState ] = useState( true );

    useEffect(() => {
        const fetchData = async ( count ) => {
            setLoading( true );
    
            let kittenArray = [];
    
            for ( let i = 0; i < count; i++ ) {
                const url = await fetch( `https://placekitten.com/300/200?image=${ getRandomNum( 1, count ) }` );
                const picUrl = await url.url;
                kittenArray.push({
                    id: i,
                    picture: picUrl,
                    name: namesArray[ Math.floor( Math.random() * namesArray.length ) ],
                    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                });
            }
    
            setData( kittenArray );
            setLoading( false );
        };

        NetInfo.fetch().then(( state  ) => {
            setConnectedState(state.isConnected );

            if ( state.isConnected ) {
                fetchData( 30 );
            }
        });

        NetInfo.addEventListener(( state ) => {
            setConnectedState( state.isConnected );

            if ( state.isConnected ) {
                fetchData( 30 );
            }
        });

    },[ isConnected ]);

    const fetchData = async ( count ) => {
        if ( isConnected ) {
            setLoading( true );

            let kittenArray = [];

            for ( let i = 0; i < count; i++ ) {
                const url = await fetch( `https://placekitten.com/300/200?image=${ getRandomNum( 1, count ) }` );
                const picUrl = await url.url;
                kittenArray.push({
                    id: i,
                    picture: picUrl,
                    name: namesArray[ Math.floor( Math.random() * namesArray.length ) ],
                    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                });
            }

            setData( kittenArray );
            setLoading( false );
        }
    };

    const getRandomNum = ( min, max ) => {
        min = Math.ceil( min );
        max = Math.floor( max );
        return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
    };

    const setFilter = count => {
        if ( !loading ) {
            setData( [] );
            fetchData( count );
            setModalVisible( false );
        } else {
            Alert.alert(
                'Please wait',
                'Kittys are loading',
                [
                  { text: 'OK' }
                ]
              );
        }
    };

    const renderListItem = ({ item }) => (
        <ListItem 
            cat={ item }
            navigate={ navigation.navigate }
        />
    );

    return (
        <View style={ styles.container }>
            <Modal
                animationType="slide"
                transparent={ true }
                visible={ modalVisible }
                onRequestClose={ () => setModalVisible( !modalVisible ) }
            >
                <Filter 
                    setModalVisible={ setModalVisible } 
                    modalVisible={ modalVisible } 
                    setFilter={ setFilter }
                />
            </Modal>

            <Pressable
                style={[ styles.button, styles.buttonOpen ]}
                onPress={ () => setModalVisible( true ) }
            >
                <Text style={ styles.textStyle }>Show Filter</Text>
            </Pressable>

            { !isConnected && 
                <NoConnectionInfo />
            }

            { loading && 
                <View style={ styles.loading }>
                    <ActivityIndicator color={ "#6ff606" } size={ 'large' } />
                </View>
            }

            <FlatList
                data={ catData }
                renderItem={ renderListItem }
                keyExtractor={ item => item.id }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 5,
        marginBottom: 15,
    },
    buttonOpen: {
        backgroundColor: '#c7dae2',
    },
    buttonClose: {
        backgroundColor: '#c7dae2',
    },
    textStyle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;
