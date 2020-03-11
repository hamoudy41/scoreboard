import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'; 
import Icon from './Icon'; 

class Player extends PureComponent {
    
  static propTypes = {
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      index: PropTypes.number,
      removePlayer: PropTypes.func,
      changeScore: PropTypes.func,
      isHighScore: PropTypes.bool
    }

 render(){

  const {
    id,
    name,
    score,
    index,
    removePlayer,
    changeScore
  } = this.props;

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <Icon isHighScore={this.props.isHighScore} />  // crown icon
        { name }
      </span>

      <Counter 
      score = {score}
      index = {index}
      changeScore = {changeScore} />
    </div>
  )
 }    
  };

  export default Player;