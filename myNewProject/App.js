import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const axios = require("axios");
  var dataArr;
  const result="";
  const [temp, setTemp]=useState(null);

  axios({
      "method":"GET",
      "url":"https://weatherbit-v1-mashape.p.rapidapi.com/current",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"weatherbit-v1-mashape.p.rapidapi.com",
      "x-rapidapi-key":"ac811c656dmsh022665b020af85fp1c8713jsnd2c11a2a464e",
      "useQueryString":true
      },"params":{
      "lang":"ru",
      "lon":"92.8671700",
      "lat":"56.0183900"
      }
      })
      .then(({data})=>{
        data.data.map(value => dataArr = value)
        setTemp(dataArr.temp)
        
      })
      .catch((error)=>{
        console.log(error)
      })


  return (
    <View style={styles.container}>
      <Text>Погода в Красноярске: {temp} °C</Text>
    </View>
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
