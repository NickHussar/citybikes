import { connect } from 'react-redux';
import StationsList from '../components/StationsList/StationsList';
import {requestStations} from '../store/stations/actions';
import {getCurrentNetwork} from '../store/stations/selectors';

const mapStateToProps = (state) => {
  return {
    currentNetwork:  getCurrentNetwork(state),
  }
}

const mapDispatchToProps = {
  requestStations,
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
