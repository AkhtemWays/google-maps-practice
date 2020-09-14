import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React from "react";
import styles from "../styles";

export const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB98zLHe6SsCCwJUCN67uzcB8BythiwwW8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `1000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 44.787197, lng: 20.457273 }}
    defaultOptions={{ styles: styles }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 44.787197, lng: 20.457273 }} />
    )}
  </GoogleMap>
));
