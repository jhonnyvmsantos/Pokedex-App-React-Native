import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export default function HomePage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
        </View>
    );
}

