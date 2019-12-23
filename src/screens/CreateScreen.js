import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const CreateScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>CreateScreen</Text>
        </View>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create post',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title="Take photo"
                iconName="ios-camera"
                onPress={() => console.log('Press photo')}
            />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
