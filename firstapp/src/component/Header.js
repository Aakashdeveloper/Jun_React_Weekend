import React,{Fragment, Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                <center>
                    <input/>
                    <div style={{color:'white'}}>User Text Here</div>
                </center>
                <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;