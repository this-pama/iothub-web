/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal, Button } from "react-bootstrap"
import { apiUrl } from '../../crud/auth.crud'

export default class DashboardArtworkDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            userComment: '',
            color: null,
            unlikeColor: null,
        }
    }

    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})

    writeComment = () =>{
        // console.log('im logging')
        if(this.state.userComment.length <= 0){
            return
        }

        var url = apiUrl + "artwork/comment/" + this.props.artwork._id;
        fetch(url, {
            method: 'POST',
            headers: { 
              'content-type': 'application/json',
              "Authorization": `Bearer ${this.props.authToken}`
             },
             body: JSON.stringify({
              name: `${this.props.user.firstName} ${this.props.user.lastName}`,
              comment: this.state.userComment,
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
              userId: this.props.user._id
            })
          })
          .then(response => response.json())
          .then(res => {
            if (res._id) {
                // if( this.props.userId != this.state.artworkUserId){
                //   this.sendPushNotification(this.state.artworkUserId, "Notification", `${this.props.profile.firstName} ${this.props.profile.lastName} just commented on your artwork`)
                // }
      
                this.handleClose()
              }
      
              else  {
                console.warn("Can't save comment")
                this.handleClose()
              }
          })
          .catch(err =>{
            console.warn(err)
            this.handleClose()
          } )
      }

      // api call for liking an artwork
    like = ()=>{
    console.warn("Liking an artwork")
   
    var url = apiUrl + "artwork/like/" + this.props.user._id + "/" + this.props.artwork._id;
    fetch(url, {
      method: 'POST',
      headers: { 
        'content-type': 'application/json',
        "Authorization": `Bearer ${this.props.authToken}`,
        'Access-Control-Allow-Origin': "POST"
       }
    })
    .then(response => response.json())
    .then(res => {
        console.log(res)
        if (res._id) {   
            this.setState({ color: 'red'})
        }

        else  {
            return
        }
    })
    .catch(err =>{
        console.warn(err)
        return
    } )    
  }
  
  
  // api call for unLiking an artwork
   unLike = async  user =>{
   
    var url = apiUrl + "artwork/unlike/" +  this.props.user._id + "/" + this.props.artwork._id;
    fetch(url, {
        method: 'POST',
        headers: { 
          'content-type': 'application/json',
          "Authorization": `Bearer ${this.props.authToken}`,
          'Access-Control-Allow-Origin': "POST"
         }
      })
      .then(response => response.json())
      .then(res => {
          console.log(res)
          if (res._id) {   
              this.setState({ unlikeColor: 'red'})
          }
  
          else  {
              return
          }
      })
      .catch(err =>{
          console.warn(err)
          return
      } ) 
  }


      handleComment= event => {
       
        if (event.target.value.length > 2) {
            this.setState({ userComment: event.target.value });
        }
      };



  render() {
    const { user, showHi, showAvatar, showBadge } = this.props;
    const comment = this.props.artwork.comment.map((data, index)=>{
        return (
            <div key={index}>
                <div className=  { index % 2 > 0 ? "kt-widget2__item kt-widget2__item--primary" : "kt-widget2__item kt-widget2__item--warning" } >
                
                    <div className="kt-widget2__info" style={{ paddingLeft: 35 }}>
                        <a  className="kt-widget2__title">
                            {data.name}
                        </a>
                        <a className="kt-widget2__username">
                            {data.comment}
                        </a>
                    </div>	
                </div>
            </div>
        )})


    return (
        <>
        <div className="col-lg-6 col-xl-4 col-sm-6 col-md-12 ">
{/* <!--begin:: Widgets/Blog--> */}
<div className="kt-portlet kt-portlet--height-fluid kt-widget19">
{ this.props.artwork.quantitySold > 0  && this.props.artwork.quantitySold < this.props.artwork.numberAvailable ? (
    <div className="kt-portlet__head kt-ribbon kt-ribbon--right">
    { this.props.artwork.quantitySold > 0 && this.props.artwork.quantitySold >= this.props.artwork.numberAvailable ? (
        <div className="kt-ribbon__target" style={{ top: 10, right: -2 }}>Sold Out</div> 
    ) : <div className="kt-ribbon__target" style={{ top: 10, right: -2 }}>{  this.props.artwork.numberAvailable - this.props.artwork.quantitySold || 1 }  Available</div>
  }
    <div className="kt-portlet__head kt-portlet__head--right kt-portlet__head--noborder  kt-ribbon kt-ribbon--clip kt-ribbon--left kt-ribbon--info">
        <div className="kt-ribbon__target" style={{ top: 12}}>
            <span className="kt-ribbon__inner"></span>{ this.props.artwork.quantitySold} Sold
        </div>
    </div>  
    </div>
 ) : null }

    <div className="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
        <div className="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides" style={{
            minHeight : 300,
            backgroundImage:  typeof(this.props.artwork.imageURL) == 'object' ?  "url("+ (this.props.artwork.imageURL[0].substring(0, this.props.artwork.imageURL[0].indexOf("/upload/"))).concat("/upload/h_300,c_scale/") + this.props.artwork.imageURL[0].slice((this.props.artwork.imageURL[0].indexOf("/upload/") + 8), this.props.artwork.imageURL[0].length ) + ")" : 
            "url("+ (this.props.artwork.imageURL.substring(0, this.props.artwork.imageURL.indexOf("/upload/"))).concat("/upload/h_300,c_scale/") + this.props.artwork.imageURL.slice((this.props.artwork.imageURL.indexOf("/upload/") + 8), this.props.artwork.imageURL.length ) + ")"
            }}>
            <h3 className="kt-widget19__title kt-font-light">
                {this.props.artwork.title}
            </h3>
            <div className="kt-widget19__shadow"></div>
        </div>
    </div>
    <div className="kt-portlet__body">
        <div className="kt-widget19__wrapper">
            <div className="kt-widget19__content">
                <div className="kt-widget19__userpic">
                    <i className="fa fa-user" title="See Sponsor" style={{ color : 'red' }} />
                </div>
                <div className="kt-widget19__info">
                    <a href="#" className="kt-widget19__username">
                    {this.props.artwork.artistName} {`(${this.props.artwork.year ? this.props.artwork.year : new Date().getFullYear()})`}
                       {/* {this.props.artwork.type} */}
                    </a>

                </div>
                <div className="kt-widget19__stats">
                    <a onClick={ this.unLike } className="kt-widget19__comment" title="Unlike">
                    <span className="kt-widget19__number kt-font-brand">
                        {this.props.artwork.unlike ? this.props.artwork.unlike.length : 0 }
                    </span>
                    <i className="fa fa-thumbs-down" style={{ color : this.props.artwork.unlike ? (this.props.artwork.unlike.findIndex(id =>{
                                         return id === this.props.user._id
                                    }) >= 0 ? "red" : this.state.unlikeColor )
                                    : null 
              }}   />
                    </a>
                </div>
                &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <div className="kt-widget19__stats">
                    <a onClick={ this.like } className="kt-widget19__comment" title="Like">
                    <span className="kt-widget19__number kt-font-brand">
                        {this.props.artwork.like ? this.props.artwork.like.length : 0 }
                    </span>
                        <i className="fa fa-thumbs-up" style={{ color : this.props.artwork.like ? (this.props.artwork.like.findIndex(id =>{
                                         return id === this.props.user._id
                                    }) >= 0 ? "red" : this.state.color )
                                    : null 
              }} />
                    </a>
                </div>
                &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;
                <div className="kt-widget19__stats">
                    
                    <a  className="kt-widget19__comment" title="Comment" onClick={this.handleShow}>
                    <span className="kt-widget19__number kt-font-brand">
                        {this.props.artwork.comment ? this.props.artwork.comment.length : 0 }
                    </span>
                        <i className="flaticon2-chat" />
                    </a>
                    <span />
                </div>

            </div>
            <div className="kt-widget19__text">
                { this.props.artwork.story }
            </div>
        </div>
        <div className="kt-widget19__action">
            { this.props.artwork.forSale ? <a href="#" className="btn btn-sm btn-label-brand btn-bold">{ `${this.props.artwork.currency} ${this.props.artwork.price}` }</a> : 
         this.props.artwork.progressShot ? <a href="#" className="btn btn-sm btn-label-brand btn-bold"> Progress Shot</a> : 
         <a href="#" className="btn btn-sm btn-label-brand btn-bold">Showcase</a> }
            
        </div>
        <Comment comment={this.props.artwork.comment} />

        <Modal show={this.state.show} onHide={this.handleClose} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Comment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                            <div className="kt-portlet__body" >
                            <div className="tab-content">
                                {/* <div className="tab-pane active" id="kt_widget2_tab1_content"> */}
                                <div className="kt-widget2" >
                            {comment.length <= 0 ? <p>No comment</p>  : comment.reverse()}
                            </div>
                            {/* </div> */}
                        </div>
                        </div>
                        </div>
            </Modal.Body>

            <Modal.Footer>
            <div className="kt-chat__input">
                <div className="kt-chat__editor">
                    <textarea placeholder="Type your comment here..." 
                        // value={this.state.userComment}
                        onChange={this.handleComment}
                        style={{height: 50, width: 350 }} 
                    />
                </div>
            </div>
                <Button variant="primary" onClick={this.writeComment} >Submit</Button>
            </Modal.Footer>
            </Modal>

    </div>
</div>

{/* <!--end:: Widgets/Blog--> */}


</div>
        </>
        
    );
  }
}



class Comment extends React.Component {
    render(){
        // console.log(this.props.comment)
        const comment = this.props.comment.map((data, index)=>{
            // console.log(data)
            return (
            
                        <div key={index}>
                            <div className=  { index % 2 > 0 ? "kt-widget2__item kt-widget2__item--primary" : "kt-widget2__item kt-widget2__item--warning" } >
                            
                                <div className="kt-widget2__info" style={{ paddingLeft: 35 }}>
                                    <a  className="kt-widget2__title">
                                        {data.name}
                                    </a>
                                    <a className="kt-widget2__username">
                                        {data.comment}
                                    </a>
                                </div>	
                            </div>
                        </div>
            //         </div>
            //     </div>
            // </div>
        )})
        return(
            <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                <div className="kt-portlet__head">
                    <div className="kt-portlet__head-label">
                        <h3 className="kt-portlet__head-title">
                            Comments
                        </h3>
                    </div>
                </div>
                <div className="kt-portlet__body" >
                <div className="tab-content">
                    {/* <div className="tab-pane active" id="kt_widget2_tab1_content"> */}
                    <div className="kt-widget2" >
                {comment.length <= 0 ? <p>No comment</p>  : comment[comment.length -1] }
                {comment.length <= 0 ? null  : comment[comment.length -2] }
                </div>
                {/* </div> */}
            </div>
            </div>
            </div>
        )
    }
}
