import { React, useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const containerStyle = {
  width: "1000px",
  height: "400px",
  borderRadius: "20px",
};

const Map = () => {
  const { flatId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDoc(doc(db, "flats", flatId));
      if (querySnapshot.exists()) {
        const documentData = querySnapshot.data();
        setData(documentData);
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  const position = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng),
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={14}>
        <MarkerF position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
