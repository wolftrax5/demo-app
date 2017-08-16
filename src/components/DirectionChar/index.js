import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from '../UI/Panel';
import Compass from '../UI/Compass';

class DirectionChar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0
    }
  }
  componentDidMount() {
    // this.a = new Chart({
    //   target: this.refs[this.props.refs],
    //   format: d => `${ d * 100 }%`
    // })
    // this.a.render({ value: this.props.data / 100 })
  }
  componentWillReceiveProps(nextProps) {
    // this.a.update({ value: nextProps.data / 100 })
    this.setState({
      data: nextProps.data
    })
  }
  render() {
    const direction = this.direction(this.state.data);
    return (
      <Panel title={'Direccion del Viento'}>
        <h3>{this.props.title}</h3>
          {direction}
          <Compass direction={direction}/>
      </Panel>
    );
  }
  direction(data) {
    if(data >= 0 && data < 90) {
      return 'NORTE';
    } else if (data >= 90 && data <= 180) {
      return 'ESTE'
    } else if (data >= 180 && data <= 270) {
      return 'OESTE'
    }else if (data >= 270 && data <= 360) {
      return 'SUR'
    }
  }
}

DirectionChar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  refs: PropTypes.string.isRequired
}
DirectionChar.defaultProps = {
  title:'Default Title',
  refs: `refs${Math.random()}`
};

export default DirectionChar;
