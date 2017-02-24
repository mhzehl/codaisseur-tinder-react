import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import Title from './Title'
import './PreviousMatches.sass'

const style = {
  height: 80,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class PreviousMatch extends PureComponent {
  render() {

    return(
      <div>
        <Title content='Previous Matches' />
        <div className='student-card'>
          <Paper style={style} zDepth={4}>
            <div className="previous-matches">
             <p>04-04-2017</p>
             <div className='previous-student'>
               <img src={`http://res.cloudinary.com/dyl4vtost/image/upload/v1487858487/Melvin_1_copy_fpel1a.jpg`} className='student-img-sm' />
               <p>Vincent Stoop</p>
             </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

export default PreviousMatch
