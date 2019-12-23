import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const PostScreen = ({navigation}) => {
    const post = navigation.getParam('post');

    const removeHandler = () => {
        Alert.alert(
            'Delete post',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'Delete', style: 'destructive', onPress: () => {}},
            ],
            {cancelable: false},
          );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const post = navigation.getParam('post');
    const date = post.date;
    const booked = post.booked;

    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Post from' + new Date(date).toLocaleDateString(),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                    title="Take photo"
                    iconName={iconName}
                    onPress={() => console.log('Press photo')}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        // fontFamily: 'open-regular'
    }
})