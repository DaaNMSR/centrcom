import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Contact } from '../const';
import styles from './ContactsMap.module.css';
import { useEffect } from 'react';

type ContactsMapProps = {
  contacts: Contact[];
};

const ChangeMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords, map]);
  return null;
};

export const ContactsMap = ({ contacts }: ContactsMapProps) => {
  const center = contacts[0].coordinates;

  return (
    <MapContainer center={center} zoom={13} className={styles.map} key={center.toString()}>
      <ChangeMapView coords={center} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {contacts.map(contact => (
        <Marker key={contact.adress} position={contact.coordinates}>
          <Popup>
            <strong>{contact.adress}</strong>
            <br />
            {contact.timeWorks}
            <br />
            {contact.phoneNumber}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
