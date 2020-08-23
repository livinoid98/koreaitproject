import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";

const API_KEY = "7fa3fda3144f7ac9a9360ea9c2e07bf6";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.setState({isLoading : false});
      // send to API and get weather
    }catch(error){
      Alert.alert("can't find you","please check in");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
      return isLoading ? <Loading/> : null;
  }
}