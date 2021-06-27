import React,{Fragment, Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
      super()

      this.state={
        title:'My React App',
        userInput: 'User Text Here'
      }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({userInput:event.target.value})
        // call property and pass data
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>>inside render>>>>>")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white'}}>{this.state.userInput}</div>
                </center>
                <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;