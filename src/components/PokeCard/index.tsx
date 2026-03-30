import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

interface Props {
    id: number;
    title: string;
}

export function PokeCard({ id, title }: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`, }} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

