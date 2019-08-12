import React from 'react';
import { StyleSheet,
   Text, 
   View,
   SafeAreaView,
   TextInput,
   TouchableOpacity,
   Alert, 
   TouchableWithoutFeedback,
   Keyboard,
  } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.12,
  POUND: 0.011,
  RUBEL: 0.93,
  CANDOLLAR: 0.019,
  Dinar:.0043,
  Aus:0.2,
  Bitcoin:0.000000041,
  Peso:0.052,
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      inputValue:"",
      resultValue:"0.0"
    }
  }

  buttonPressed = (currency) =>{
    if(this.state.inputValue === ""){
      Alert.alert("Enter some value" + currency)
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
 
    this.setState({resultValue: result.toFixed(2)})
 
 
  }

  render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style ={styles.resultcontainer}>
          <Text style={styles.resultValue} >
            {this.state.resultValue} 
            
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput style={styles.input}
          selectionColor="#FFF"
          keyboardType="numeric"
          placeholder="Enter value"
          value={this.state.inputValue}
          onChangeText={inputValue => this.setState({
            inputValue
          })}/>

        </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={() => this.buttonPressed("DOLLAR")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Dollar</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("EURO")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Euro</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("POUND")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Pound</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("RUBEL")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Rubel</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("CANDOLLAR")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Canada</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("Peso")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Peso</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("Aus")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Aussie</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("Bitcoin")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Bitcoin</Text>
              

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("Dinar")}
            style={styles.converterbutton}>
              <Text style = {styles.converterbuttontext}>Dinar</Text>

            </TouchableOpacity>

          </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26ae60',
    //marginTop:20
    
  },
  screenview:{
    flex:1
  },
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DE",
    alignItems:"center",
    borderWidth:2
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DE"

  },
  input:{
    color:"#FFF",
    fontSize:30,
    justifyContent:"center",
    alignItems:"center",
  },
  converterButtonContainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  converterbutton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  converterbuttontext:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
});
