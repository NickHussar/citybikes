import cn from 'classnames';
import React, {useEffect} from 'react';
import styles from './networksList.module.scss';

const NetworksList = ({
    networksList,
    selectNetwork,
    requestNetworks,
    currentNetworkId,
    loadedNetworks,
    setCurrentNetworkId,
}) => {

    useEffect(() => {
        requestNetworks();
        return () => false;
    }, []);

    const handleClick = (id) => {
        if (!loadedNetworks[id]) {
            selectNetwork(id);
        } else {
            setCurrentNetworkId(id);
        }
    }

    return (
        <div className={styles.networksList}>
            <h2>Networks</h2>
            {networksList.length ? networksList.map((network, index) => (
                    <div
                        className={cn(styles.networkCard, {
                            [styles.networkCard_active]: network.id === currentNetworkId,
                        })}
                        onClick={() => handleClick(network.id)}
                        key={index}
                    >
                        <div className={styles.title}>
                            {network.company}
                        </div>
                        <div className={styles.city}>
                            {network.location.city}
                        </div>
                    </div>
            )) : 'loading...'}
        </div>
    )
}

export default NetworksList;
