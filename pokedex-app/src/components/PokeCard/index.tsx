import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

interface Props {
    title: string;
}

export function PokeCard({ title }: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

