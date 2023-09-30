import {createStackNavigator} from '@react-navigation/stack';

import Raiz from './buttom';
import Jogo from './jogo';
import Filme from './filme';

const Stack = createStackNavigator();

export default function FotosStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Raiz" component={Raiz}/>
      <Stack.Screen name="Jogo" component={Jogo} options={{title:"Jogo"}}/>
      <Stack.Screen name="Filme" component={Filme}options={{title:"Filme"}}/>
    </Stack.Navigator>
  );
}