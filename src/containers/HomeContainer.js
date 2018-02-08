import {connect} from 'react-redux';
import Home from '../components/Home';

import {getCurrentLocation, getInputData} from '.././actions/MapActions';

const mapStateToProps = (state) => {
    return {
        region: state.MapActions.region,
        inputData: state.MapActions.inputData
    }
}

export default connect(mapStateToProps,{getCurrentLocation, getInputData})(Home);

