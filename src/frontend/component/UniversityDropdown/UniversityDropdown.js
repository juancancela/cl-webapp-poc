import React from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';

class UniversityDropdown extends React.Component {
  state = {
    universitySelected: 3
  };

  universities = [
    { value: 1, name: 'University Of Florida', area: 'Florida Area', img: 'http://www.ufl.edu/media/templates/uf2015/img/favicon-180.png' },
    { value: 2, name: 'University Of New York', area: 'NYC Area', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/New_York_University_Seal.svg/1200px-New_York_University_Seal.svg.png' },
    { value: 3, name: 'University Of Buenos Aires', area: 'Buenos Aires Area', img: 'http://www.dc.uba.ar/events/icpc/2015/images/uba_logo.jpg' },
    { value: 4, name: 'University Of Detroit', area: 'Detroid Area', img: 'https://upload.wikimedia.org/wikipedia/en/c/c5/University_of_Detroit_Mercy_seal_2012.png' }
  ];

  handleUniversityChange = (value) => {
    this.setState({universitySelected: value});
  };

  customItem (item) {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    const imageStyle = {
      display: 'flex',
      width: '32px',
      height: '32px',
      flexGrow: 0,
      marginRight: '8px',
      backgroundColor: '#ccc'
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2
    };

    return (
      <div style={containerStyle}>
        <img src={item.img} style={imageStyle}/>
        <div style={contentStyle}>
          <strong>{item.name}</strong>
          <small>{item.area}</small>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div>
        <Dropdown
          auto={false}
          source={this.universities}
          onChange={this.handleUniversityChange}
          label='Search Colleges'
          template={this.customItem}
          value={this.state.universitySelected}
          className='search-area'
        />
      </div>
    );
  }
}

export default UniversityDropdown