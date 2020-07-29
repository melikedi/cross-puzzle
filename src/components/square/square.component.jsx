import React from 'react';
import './square.styles.scss';

class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: (props.isspace ? '' : props.text),
            isspace: props.isspace,
            isfocused: props.isfocused,
            iseditable: props.iseditable
        }

    }
    onKeyPressed = (e) => {
        console.log(e.target.value.length);
        this.setState({text:e.target.value[e.target.value.length-1]});
    }

    render() {
     
        var classname = `square `;
        if (this.state.isspace) {
            classname = classname + `space`
        }
    
        return (
            <input type='text' className = {classname} onChange={this.onKeyPressed} value = {this.state.text} readonly={ (this.state.iseditable ? '' : 'readonly')}></input>
        ); 
    }
   
}

    




export default Square;