import React, { Component } from 'react';
 
// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown} from 'react-country-region-selector';
 
 
class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '' };
  }
 
  selectCountry (val) {
    this.setState({ country: val });
  }

 
  render () {
    const { country} = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
      </div>
    );
  }
}
export default Example;