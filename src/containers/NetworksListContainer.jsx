import { connect } from 'react-redux';
import NetworksList from '../components/NetworksList/NetworksList';
import {requestNetworks, selectNetwork, setCurrentNetworkId} from '../store/networks/actions';
import {getNetworksSaga, getCurrentNetworkId, getLoadedNetworks} from '../store/networks/selectors';

const mapStateToProps = (state) => {
  return {
    networksList: getNetworksSaga(state),
    currentNetworkId: getCurrentNetworkId(state),
    loadedNetworks: getLoadedNetworks(state),
  }
}

const mapDispatchToProps = {
  requestNetworks,
  selectNetwork,
  setCurrentNetworkId,
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworksList);
