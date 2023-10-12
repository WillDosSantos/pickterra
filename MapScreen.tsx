import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }, []);

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    />
  );
};

export default MapScreen;
