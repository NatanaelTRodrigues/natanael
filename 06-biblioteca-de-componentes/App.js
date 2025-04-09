import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function App() {

  const lista = [
    {
      titulo: "Um titulo",
      descricao: "Lorem ipsuaLorem ipsua Lorem Lorem ipsuaLorem ipsua Lorem",
      imagem:""
    }
  ]

  return (
    <PaperProvider>

    <View style={styles.container}>
<ScrollView>
      <StatusBar style="auto" />
      
        {
          lista.map(
            (fruta) => <Text>{fruta}</Text>
          )
        }
    <FlatList
    data={lista}
    renderItem={({item}) => <Text>{item}</Text>}
    />
    <FlatList
    data={lista}
    renderItem={({item}) => (
      <View>
        <Text>{item}</Text>
        <Divider/>
      </View>
    )}
    />
    
  


    </ScrollView>
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
