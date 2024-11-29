import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { PokeCard } from '@/components/PokeCard';

interface Poke {
    entry_number: number;
    pokemon_species: {
        name: string;
        url: string;
    };
};

export default function HomePage() {
    const navigation = useNavigation();
    const [pokedex, setPokedex] = React.useState([]);

    React.useEffect((): void => {
        fetch(
            'https://pokeapi.co/api/v2/pokedex/1',
            {
                method: 'GET',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(
                (res) => res.json()
            ).then((data) => {
                const temp = data.pokemon_entries;
                setPokedex(temp);
            }).catch(
                (error) => console.log(error)
            )
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
            <FlatList
                data={pokedex}
                renderItem={({ item }) => {
                    return (
                        <PokeCard id={item.entry_number} title={item.pokemon_species.name} />
                    )
                }}
                keyExtractor={(item: Poke) => item.entry_number.toString()}
            />
        </View>
    );
}

