import React, { Component } from 'react';
import HomeHeader from '../components/HomePageComponents/HomeHeader';
import { base } from '../objects/config';
import { Grid, Row, Col } from 'react-bootstrap';
import Recitation from '../objects/Recitation';
import RecitationItem2 from '../components/SearchPageComps/RecitationItem2';
import MultiLines from '../components/PoemPageComps/MultiLines';
var Base64 = require('js-base64').Base64;

export default class MainPoem extends Component {
    constructor(props){
        super(props);
        this.state = {
            poemName: '',
            allPoemData: [],
            loading: true,
            recComponents: [],
            text: '',
        }
    }

    componentDidMount(){
        var url = window.location.href;
        var n = url.indexOf("allrecordings");
        var poem = url.substring(n+14);
        String.prototype.replaceAll = function (find, replace) {
            var str = this;
            return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
        };
        // get final title
        var final = poem.replaceAll('+', ' ');
        final.replaceAll('%20', ' ');
        console.log(final,' poem id');
        // get poem name,
        base.fetch(`/Recitations/${final}`, {
            context: this,
            then(data){
                //console.log(data);
                this.setState({title: data.title, text: data.text});

                base.fetch(`/Recitations`, {
                    context: this,
                    asArray: true,
                    then(allPoemData) {
                        this.setState({allPoemData, loading: false});

                        var recs = [];
                        var comps = [];

                        allPoemData.map((poem) => {
                            if(data.title === poem.title){

                                var recObj = new Recitation (poem.id,
                                    poem.uploaderID,
                                    poem.uploaderName,
                                    poem.image,
                                    poem.title,
                                    poem.author,
                                    poem.recited_by,
                                    poem.published,
                                    poem.genre,
                                    poem.description,
                                    poem.likes,
                                    poem.plays,
                                    poem.favorites,
                                    poem.text,
                                    poem.audio,
                                    poem.timestamp,
                                    null);

                                    recs.push(recObj);
                                    this.setState({
                                        matchingRecitations: recs
                                    });

                                    var item = <RecitationItem2 key={poem.timestamp}
                                                                recitation={recObj}
                                                                nav={this.props.nav}
                                                                rStore={this.props.rStore}></RecitationItem2>
                                    comps.push(item);
                                    this.setState({
                                        recComponents: comps
                                    });
                                }

                        })

                    }
                });
            }
        })
        // get all poems



    }
    getOverlay() {
        return {
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:'0',
            backgroundColor: 'white'
        }
    }
    getStyles() {
        return {
            position:'absolute',
            left:'0px',
            top:'0px',
            width:'100%'
        };
    }

    AddPeomButtonStyle(){
      return{
        marginLeft:'800px',

      }
    }

    addPeom() {
      let url = "upload?"+Base64.encode(this.state.title);
      //alert(url);
      window.location.href = url;
    }

    render(){
        const poemList = this.state.allPoemData.map((poem) => {
            console.log(poem, 'poemlog');
                if(this.state.title === poem.title){
                    return (
                        <div>
                            <p>{poem.recited_by}</p>
                        </div>
                    )
                }
        })
        return this.state.loading === false && (
            <div>
                <HomeHeader nav={this.props.nav} rStore={this.props.rStore}></HomeHeader>

                <div style={{marginTop: '5%'}} className="content">
                <h2 style={{marginLeft: '25%'}} >{this.state.title}</h2>
                <button type="button" style={this.AddPeomButtonStyle()}  onClick={this.addPeom.bind(this)} className="btn btn-success">Add Recording</button>
                <div className="multiLine" style={{lineHeight: '2', fontWeight: '700' , marginRight: '25%', marginLeft: '25%', marginTop: '25px', height: '300px', overflowY: 'scroll'}}>
                  <MultiLines content={this.state.text} ></MultiLines></div>
                    <div style={{boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)', marginLeft: '25%', marginRight: '25%', marginBottom: '10px', marginTop: '10px', paddingBottom: '5%', paddingTop: '5%'}}>
                        {this.state.recComponents}
                    </div>
                </div>
            </div>
        )
    }
}
