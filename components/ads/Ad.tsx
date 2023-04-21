import React from 'react';
import {Text, View} from 'react-native/types';
import {IAd} from '../../types/Ad';

function Ad({ad}: {ad: IAd}) {
  return (
    <View>
      <Text>{ad.ad_id}</Text>
      <Text>{ad.ad_title}</Text>
      <Text>{ad.asking_price}</Text>
      <Text>{ad.user_id}</Text>
    </View>
  );
}

export default Ad;
