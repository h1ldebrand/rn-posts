import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Post } from './Post';

export const PostList = ({data, onOpen}) => {

    if(!data.length){
        return (
            <View style={styles.wrar}>
                <Text style={styles.noItems}>You doesn't have any posts</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrap}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={ ({item}) => <Post post={item} onOpen={onOpen} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        padding: 10,
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        fontSize: 20
    }
})
