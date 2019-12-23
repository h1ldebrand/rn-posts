import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from '../data';
import { PostList } from '../components/PostList';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const BookedScreen = ({navigation}) => {

    const openPostHandler = post => {
        navigation.navigate('Post', {post})
    }

    return <PostList data={DATA.filter(post => post.booked)} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Favorites',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})