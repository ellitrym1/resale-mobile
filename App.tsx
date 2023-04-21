import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {IAd} from './types/Ad';

const App = () => {
  const [ads, setAds] = useState<[IAd]>();

  useEffect(() => {
    fetch(`http://10.0.2.2:5000/api/ads`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setAds(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{ads ? ads[0].ad_id : 'no data'}</Text>
    </View>
  );
};
export default App;
