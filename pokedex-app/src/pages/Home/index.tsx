import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

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

    React.useEffect(() => {
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
                const temp: Poke[] = data.pokemon_entries;
                setPokedex(temp);
            }).catch(
                (error) => console.log(error)
            )
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
        </View>
    );
}

