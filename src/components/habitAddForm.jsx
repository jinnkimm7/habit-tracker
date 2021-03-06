import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input 
          className="add-input" 
          type="text" 
          placeholder='Habit'
          ref={this.inputRef}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;