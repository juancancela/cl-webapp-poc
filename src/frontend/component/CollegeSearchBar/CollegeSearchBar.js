import React from 'react';
import Input from 'react-toolbox/lib/input';

class CollegeSearchBar extends React.Component {
  state = { name: '', phone: '', multiline: '', email: '', hint: '', label: '' }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value})
  };

  render () {
    return (
        <Input type='text' label='Search For Colleges' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
    );
  }
}

export default CollegeSearchBar
