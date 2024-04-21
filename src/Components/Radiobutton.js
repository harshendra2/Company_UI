import React from 'react';
import '../Styles/RadioButton.css';

class RadioButtonComponent extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
 }

 handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
 }

 render() {
    return (
      <div>
        <label className="custom-radio">
          <input
            type="radio"
            value="option1"
            checked={this.state.selectedOption === 'option1'}
            onChange={this.handleOptionChange}
            className="custom-radio-input"
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            value="option2"
            checked={this.state.selectedOption === 'option2'}
            onChange={this.handleOptionChange}
            className="custom-radio-input"
          />
          No
        </label>
      </div>
    );
 }
}

export default RadioButtonComponent;
