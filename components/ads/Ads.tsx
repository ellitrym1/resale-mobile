import React from 'react';
import {ScrollView} from 'react-native';
import {IAd} from '../../types/Ad';
import Ad from './Ad';

interface IAdsProps {
  ads: [IAd];
}

function Ads({ads}: IAdsProps) {
  return (
    <ScrollView>
      {ads.map(ad => (
        <Ad key={ad.ad_id} ad={ad} />
      ))}
    </ScrollView>
  );
}

export default Ads;
