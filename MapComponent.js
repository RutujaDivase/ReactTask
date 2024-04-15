// MapComponent.js

import React, { useRef, useEffect } from 'react';

function MapComponent({ profiles, selectedProfile }) {
  const mapRef = useRef(null);

  useEffect(() => {
    
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    profiles.forEach(profile => {
      const marker = new google.maps.Marker({
        position: { lat: profile.lat, lng: profile.lng },
        map,
        title: profile.name,
      });

      marker.addListener('click', () => {
      });
    });

    if (selectedProfile) {
      map.setCenter({ lat: selectedProfile.lat, lng: selectedProfile.lng });
      map.setZoom(10); 
    }
  }, [profiles, selectedProfile]);

  return <div ref={mapRef} className="map" />;
}

export default MapComponent;
