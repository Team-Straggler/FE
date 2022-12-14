import Map from './map';
import styles from '../styles/Home.module.css';
import foodBankData from '../data-20221020221251.json'


export const HomeMap = () => {

  let foodBankDataList = foodBankData.data

  let foodBankCity = []

  const getBankListByZip = (zipCity) =>{
      let listBankListZip = foodBankDataList.filter(data => {
          return data[10] == zipCity
      } )
      foodBankCity = listBankListZip
  }
  getBankListByZip('Los Angeles')

  return (
    <Map className={styles.homeMap} center={[34.0522, -118.2437]} zoom={12}>
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {foodBankCity.map(foodbank => {
            return (
              <Marker position={[foodbank[19], foodbank[20]]} key={foodbank[1]}>
                <Popup>
                  {foodbank[8]}
                </Popup>
              </Marker>
            )
          })}
          <Marker position={[34.0522, -118.2437]}>
            <Popup>
              Example Food Shelter Location
            </Popup>
          </Marker>
        </>
      )}
    </Map>
  );
};
