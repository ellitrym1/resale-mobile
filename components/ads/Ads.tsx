import React from 'react';
import {View} from 'react-native/types';
import {IAd} from '../../types/Ad';
import Ad from './Ad';

interface IAdsProps {
  ads: [IAd];
}

function Ads({ads}: IAdsProps) {
  return (
    <View>
      {ads.map(ad => (
        <Ad ad={ad} />
      ))}
    </View>
  );
}

export default Ads;
