import React from 'react';
import ParkingSpot from './shared/parkingSpot/parkingSpot.jsx';
import ChevronRight from './shared/icons/chevronRight.jsx';
import Trash from './shared/icons/trash.jsx';
import './app.css';
import MapContainer from './booking/map.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount () {
    fetch(`/spots`)
      .then((resp) => resp.json())
      .then((spots) => {
        console.log('SPOTS', spots);
        this.setState({locations: spots})
      })
      .catch((err) => {
        console.log('ERROR GETTING SPOTS', err);
      })
  }

  onIconClick = () => {
    console.log('HELLO')
  }

  render () {
    return (
      <div>
        HELLO GALILEO
        <MapContainer locations={this.state.locations}/>
        <ParkingSpot
          image='https://i.guim.co.uk/img/media/c70fe24fdbd8fa46f6a2c8dbdad64e794a543376/0_180_2700_1620/master/2700.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8a3c4c73bfd00329c27afab1ba7f05e3'
          rate='$2/hr'
          firstLine='E 60th Hyatt Place'
          secondLine='New York, NY 10005'
          onIconClick={this.onIconClick}
          ActionIcon={ChevronRight}
        />
        <ParkingSpot
          image='https://i.guim.co.uk/img/media/c70fe24fdbd8fa46f6a2c8dbdad64e794a543376/0_180_2700_1620/master/2700.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8a3c4c73bfd00329c27afab1ba7f05e3'
          firstLine='E 60th Hyatt Place'
          secondLine='New York, NY 10005'
          date='September 4th 2021'
          time='2:00pm-4:00pm '
          total='Total: $4.75'
          onIconClick={this.onIconClick}
          ActionIcon={Trash}
        />
      </div>
    )
  };
}

export default App;