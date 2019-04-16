import React, { Component } from 'react';
import './Form.css';

  class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          title: '',
          globalTitle: '',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }    
      
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        this.setState({
            globalTitle: this.state.title
        })
        console.log('Titre changé')
        e.preventDefault();    
    }

    componentDidMount() {
        console.log('Formulaire rendu');
      }

    render() {
      return (
        <React.Fragment>
        <h1>Mon formulaire - {this.state.globalTitle}</h1>
        <div className="LifeCycleForm">
            <form onSubmit={this.submitForm}>
            <fieldset>
                <div className="form-data">
                <label htmlFor="text">Message</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                </div>
                <hr />
                <div className="form-data">
                <input type="submit" value="Submit" />
                </div>
            </fieldset>
            </form>
        </div>
        </React.Fragment>
      );
    }
  }
  
  export default Form;

