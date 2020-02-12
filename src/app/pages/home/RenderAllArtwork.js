/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../_metronic";
import DisplayArtwork from "../../partials/content/DashboardArtworkDisplay"

export default class RenderAllArtwork extends React.Component {
    constructor(props){
        super(props);
        this.state={
          feed: [],
          allArtwork: []
        }
      }
      
      componentDidMount(){
        this.getFeed() 
      }

      getFeed= async ()=>{
        var url = "https://artered.herokuapp.com/v1/" + "artwork/withoutJwt" ;
        var result = await fetch(url, {
          method: 'GET',
          headers: { 
            'content-type': 'application/json',
            // "Authorization": `Bearer ${this.props.jwt.jwt}`
           }
        });
        var response = await result;
        if(response.status !== 200 ){
          console.warn("fetching feeds failed response")
          this.setState({
            feed: []
          })
          return
        }
        else{
          var res = await response.json();
          if (res[0]._id) {
            // console.warn("res", res)
            let reverseResp = await res.reverse()
            // console.warn("reverseResp", reverseResp)
            this.setState({
              feed: reverseResp
            })
            this.mapAllFeed()
          }
  
          else  {
            console.warn("Can't get feeds")
            this.setState({
              feed: []
            })
            
          }
        }
      
    }
  
    mapAllFeed = async ()=>{
      var allArtwork = await this.state.feed.map(artwork => 
        <DisplayArtwork
          key={artwork._id} 
          artwork= {artwork} 
        //   navigation = {this.props.navigation}
        //   userId={ this.props.userId}
        //   jwt = {this.props.jwt}
        //   profile= {this.props.profile}
        //   moreArtworkDetailsAction = { this.props.moreArtworkDetailsAction}
        //   buyArtworkAction= {this.props.buyArtworkAction}
        //   like= {like}
        //   unLike= { unLike }
          // sendPushNotification = { this.sendPushNotification }
        />
      )
      this.setState({ allArtwork  })
    }


  render() {

    return ( <> { this.state.allArtwork } </> )
       
  }
}

