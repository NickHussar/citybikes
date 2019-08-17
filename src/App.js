import React from 'react';
import styles from './app.module.scss';
import NetworksList from './containers/NetworksListContainer';
import StationsList from './containers/StationsListContainer';

const App = () => {
  return (
    <div className={styles.app}>
      <NetworksList />
      <StationsList />
    </div>
  );
}

export default App;
