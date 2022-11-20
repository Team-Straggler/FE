import Map from './map';
import styles from '../styles/Home.module.css';


export const HomeMap = () => {
  return (
    <Map className={styles.homeMap} center={[38.907132, -77.036546]} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[38.907132, -77.036546]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  );
};
