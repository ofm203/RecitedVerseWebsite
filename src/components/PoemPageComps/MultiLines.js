import React, { Component } from 'react';
import * as firebase from 'firebase';


import _ from '../../css/MultiLines.css';

export default class MultiLines extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentWillMount(){

    }

    render(){
      if(this.props.content == null){
        return (<div></div>)
      }
      var lines = this.props.content.split("\n");

      var LinesList = lines.map(function(line){
                      return <li>{line}&nbsp;</li>;
                    })
        return (
            <div className="MultiLines">
            {LinesList}


            </div>
        )
    }
}
