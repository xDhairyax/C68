import React from 'react';
import {Text,View} from 'react-native';

export default class BookTransactionScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Issue or Returning Book</Text>
            </View>
        )
    }
}