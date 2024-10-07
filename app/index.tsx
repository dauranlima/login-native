import { useEffect, useState } from "react";
import { 
  Text, 
  View, 
  KeyboardAvoidingView,
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Animated,
} from "react-native";


export default function Index() {
  const [offset] =  useState(new Animated.ValueXY({x:0, y:70}));
  const [opacity] =  useState(new Animated.Value(0));
  
  useEffect(()=>{
    Animated.parallel([
      Animated.spring(offset.y,{
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(offset.y,{
        toValue: 0,
        duration: 800,
        useNativeDriver: true
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start()

  },[])

  return (
    <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
      <Image
        source={require('@/src/assets/logoda.png')}
      />
    </View>
    <Animated.View 
    style={[
      styles.container,
      {
        opacity: opacity,
        transform: [
          {translateY:offset.y}
        ]
      }
      ]}>
      <TextInput
        style={styles.input}
        placeholder="Email"

        autoCorrect={false}
        onChangeText={() => {}}
        />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TouchableOpacity
      style={styles.button}
      >
      <Text
      style={styles.btn_text}
      >Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn_register}
      >
      <Text style={styles.register_text} >Criar conta gratuita</Text>
      </TouchableOpacity>
    </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#131313',
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  button:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
    
  },
  btn_register:{
    marginBottom: 15,
  },
  btn_text:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  register_text:{
    color: '#FFF',
  }

})