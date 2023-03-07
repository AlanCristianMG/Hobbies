import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20
    }
});

export const HobbyDetails = ({route}:any) => {
    const categoryId = route.params.categoryId;
    return(
        <View style={Styles.container}>
            <Text>Identificador de la categoria: {categoryId}</Text>
        </View>
    );
}