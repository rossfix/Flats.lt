import { React, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const containerStyle = {
  width: '1000px',
  height: '400px',
  borderRadius: '20px',
};

const Map = () => {
  const { flatId } = useParams();
  const [data, setData] = useState([]);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDoc(doc(db, 'flats', flatId));
      if (querySnapshot.exists()) {
        const documentData = querySnapshot.data();
        setData(documentData);

        const address = `${documentData.homeNr}+${documentData.street}+g.,+${documentData.city},+lithuania`;
        console.log(address);
        geocodeAddress(address);
      } else {
        console.log('No such document!');
      }
    };
    fetchData();
  }, [flatId]);

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      const { results } = data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        console.log('Latitude:', lat, 'Longitude:', lng);
        setPosition({ lat, lng });
      } else {
        console.log('No results found! Setting position to Vilnius center.');
        setPosition({ lat: 54.6872, lng: 25.2797 });
      }
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
