/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import DisplayArtwork from "../../partials/content/DashboardArtworkDisplay"

class RenderAllArtwork extends React.Component {
    constructor(props){
        super(props);
        this.state={
          feed: [],
          allArtwork: []
        }
      }
      
      componentDidMount(){
        this.getFeed() 
        console.log(this.props.user)
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
            // console.warn( res)
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
          user={ this.props.user}
          authToken = {this.props.authToken.authToken}
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


const mapStateToProps = ({ auth: { user, authToken } }) => ({
  user, authToken
});

export default connect(mapStateToProps)(RenderAllArtwork)
