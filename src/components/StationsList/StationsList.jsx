import React from 'react';
import styles from './stationsList.module.scss';

const StationsList = ({
    currentNetwork,
}) => {
    console.log(currentNetwork);

    const stationsMap = () => {
        if (currentNetwork && currentNetwork.stations) {
            return (
                currentNetwork.stations.map((station, index) => (
                    <div className={styles.stationCard} key={index}>
                        <div className={styles.name}>
                            {station.name}
                        </div>
                        <div className={styles.stations}>
                            {station.free_bikes}
                            {station.empty_slots}
                        </div>
                    </div>
                ))
            )
        } else {
            return 'loading...'
        }
    }

    return (
        <div className={styles.stationsList}>
            <h2>Stations</h2>
            {stationsMap()}
        </div>
    )
}

export default StationsList;
