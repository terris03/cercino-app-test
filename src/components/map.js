import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './styles.module.css';
import MarkerClusterer from '@google/markerclustererplus';

const apiOptions = {
  apiKey: 'AIzaSyDSlqHkVmlUN8uzLaMkIKoFwbcwZc666zc',
};

const MapComponent = () => {
  useEffect(() => {
    const loader = new Loader(apiOptions);

    loader.load().then(() => {
      initMap();
    });
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 56.0347857, lng: 12.7061014 } /*56.0347857,12.7061014 */,
      zoom: 14,
      mapId: '5ad1f659c9ae8602',
      disableDefaultUI: true,
      backgroundColor: 'none',
    };

    const mapDiv = document.getElementById('map');

    if (window.google) {
      // Check if the 'google' object is defined
      const map = new window.google.maps.Map(mapDiv, mapOptions);
      const markers = addMarkers(map);
      clusterMarkers(map, markers);
      addPanToMarker(map, markers);
    }
  };

  const addMarkers = (map) => {
    const locations = {
      barangaroo: { lat: -33.8605523, lng: 151.1972205 },
    };

    const markers = [];
    for (const location in locations) {
      const markerOptions = {
        map: map,
        position: locations[location],
        icon: './img/custom_pin.png',
      };
      const marker = new window.google.maps.Marker(markerOptions);
      markers.push(marker);
    }
    return markers;
  };

  const clusterMarkers = (map, markers) => {
    const clustererOptions = { imagePath: './img/m' };
    const markerCluster = new MarkerClusterer(map, markers, clustererOptions);
  };

  const addPanToMarker = (map, markers) => {
    let circle;
    markers.map((marker) => {
      marker.addListener('click', (event) => {
        const location = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        map.panTo(location);
        if (circle) {
          circle.setMap(null);
        }
        circle = drawCircle(map, location);
      });
    });
  };

  const drawCircle = (map, location) => {
    const circleOptions = {
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      map: map,
      center: location,
      radius: 800,
    };
    const circle = new window.google.maps.Circle(circleOptions);
    return circle;
  };

  return (
    <>
      <div
        id="map"
        className={styles.map_remove}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '1',
          background: 'black',
        }}
      ></div>
    </>
  );
};

export default MapComponent;
