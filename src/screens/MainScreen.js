import React, { useEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux'

import { loadPosts } from '../store/actions/post'
import { PostList } from '../components/PostList';

import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const openPostHandler = post => {
        navigation.navigate('Post', {post})
    }

    return <PostList data={allPosts} onOpen={openPostHandler} />
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