import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function App() {

  const lista = ["Uva","Maça","Banana","Laranja"]

  return (
    <PaperProvider>

    <View style={styles.container}>
<ScrollView>
      <StatusBar style="auto" />
       <Card>
         <Card.Content>

          <Text></Text>
          <Text></Text>
          <Text></Text>
        
          <Button icon='camera'mode='contained' onPress={() => alert("cliclou")}>Clique aqui</Button>
          <Button mode='contained-tonal' onPress={() => alert("cliclou")}>Clique aqui</Button>
          <Button mode='elevanted' onPress={() => alert("cliclou")}>Clique aqui</Button>
          <Button mode='outlined' onPress={() => alert("cliclou")}>Clique aqui</Button>
          <Button mode='text' onPress={() => alert("cliclou")}>Clique aqui</Button>



          <Text>Uva</Text>
          <Divider/>
          <Text>Maça</Text>
          <Divider/>
          <Text>Banana</Text>
          <Divider/>
          <Text>Laranja</Text>
          <Divider/>

          <Title>Título do Card</Title>
          <Paragraph>Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer     
          </Paragraph>
         </Card.Content>
         <Card.Cover source={{uri:'https://i.pinimg.com/236x/36/da/00/36da00c5734e9387f3bc67a3a50e6e8b.jpg'}}></Card.Cover>

       </Card>
       <Card>
         <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer     
          </Paragraph>
         </Card.Content>

       </Card>
       <Card>
         <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer     
          </Paragraph>
         </Card.Content>

       </Card>
       <Card>
         <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer     
          </Paragraph>
         </Card.Content>

       </Card>
       <Card>
         <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer Um Paragrado qualquer     
          </Paragraph>
         </Card.Content>

       </Card>




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
