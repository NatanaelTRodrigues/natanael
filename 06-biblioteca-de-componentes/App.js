import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';

export default function App() {

  const lista = [
    {
      titulo: "Um titulo",
      descricao: "Lorem ipsuaLorem ipsua Lorem Lorem ipsuaLorem ipsua Lorem",
      imagem:"https://i.pinimg.com/474x/50/4d/35/504d35925085eef72519fe289d176f34.jpg"
    },
    {
      titulo: "Um titulo",
      descricao: "Lorem ipsuaLorem ipsua Lorem Lorem ipsuaLorem ipsua Lorem",
      imagem:"https://i.pinimg.com/474x/50/4d/35/504d35925085eef72519fe289d176f34.jpg"
    },
    {
      titulo: "Um titulo",
      descricao: "Lorem ipsuaLorem ipsua Lorem Lorem ipsuaLorem ipsua Lorem",
      imagem:"https://i.pinimg.com/474x/50/4d/35/504d35925085eef72519fe289d176f34.jpg"
    }
  ]

  return (
    <PaperProvider>

    <View style={styles.container}>

      <StatusBar style="auto" />
      

    <FlatList
    horizontal
    data={lista}
    renderItem={({item}) => (
      <View>
        <Title>{item.titulo}</Title>
        <Paragraph>{item.descricao}</Paragraph>
        <CardContent/>
        <Card.Cover source={{uri: item.imagem}}/>
        <Divider/>
      </View>
    )}
    />
    


    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
