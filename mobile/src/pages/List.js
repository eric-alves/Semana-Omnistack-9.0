import React, { useEffect } from 'react';
import { View, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    AsyncStorage, 
    Image,
    ScrollView
    } from 'react-native';
import logo from '../assets/logo.png';
import { useState } from 'react';
import SpotList from '../components/SpotList';

export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storegeTechs => {
            const techsArray = storegeTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 40,
    }
})