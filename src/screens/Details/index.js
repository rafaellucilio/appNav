import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './style';

import { useRoute } from '@react-navigation/core';

export default function Details(){

    const routes = useRoute();
    return(
            <View>
          <Image style={styles.images} source = {require(`../../Img/${routes.params.imagem}`)} />
          <Text style ={styles.titulo}>{routes.params.titulo} </Text> 
            </View> 
    
        )


}