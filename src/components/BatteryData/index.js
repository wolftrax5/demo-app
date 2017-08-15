import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from '../UI/Panel';
import Battery from '../UI/Battery';

class BatteryData extends Component {

  render() {
    const {data} = this.props
    return(
      <Panel title="Bateria" description={`${data} volts`}>
        <Battery
          volts={data}
          maxVolts={5}
          />
      </Panel>
    )
  }
}
BatteryData.propTypes = {
  data: PropTypes.number,
  title: PropTypes.string,
}
export default BatteryData;
