import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PostList } from '../components/PostList';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MainScreen = ({navigation}) => {

    const openPostHandler = post => {
        navigation.navigate('Post', {post})
    }

    return <PostList data={DATA} onOpen={openPostHandler} />
}

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My blog',
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
                onPress={() => navigation.push('Create')}
            />
        </HeaderButtons>
    )
})