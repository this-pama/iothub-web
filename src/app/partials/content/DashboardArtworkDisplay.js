/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../_metronic";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";

export default class DashboardArtworkDisplay extends React.Component {
  render() {
    const { user, showHi, showAvatar, showBadge } = this.props;

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
            {/* <div className="kt-widget19__labels">
                <Link to='' className="btn btn-label-light-o2 btn-bold ">
                   See Sponsor
                </Link>
            </div> */}
        </div>
    </div>
    <div className="kt-portlet__body">
        <div className="kt-widget19__wrapper">
            <div className="kt-widget19__content">
                <div className="kt-widget19__userpic">
                    <i className="fa fa-user" title="See Sponsor" />
                </div>
                <div className="kt-widget19__info">
                    <a href="#" className="kt-widget19__username">
                    {this.props.artwork.artistName} {`(${this.props.artwork.year ? this.props.artwork.year : new Date().getFullYear()})`}
                       {/* {this.props.artwork.type} */}
                    </a>
                    {/* <span className="kt-widget19__time">
                        UX/UI Designer, Google
                    </span> */}
                </div>
                <div className="kt-widget19__stats">
                    <a href="#" className="kt-widget19__comment" title="Unlike">
                    <span className="kt-widget19__number kt-font-brand">
                        {this.props.artwork.unlike ? this.props.artwork.unlike.length : 0 }
                    </span>
                    <i className="fa fa-thumbs-down" style={{ color : this.props.artwork.unlike ? (this.props.artwork.unlike.findIndex(id =>{
                                         return id === this.props.userId
                                    }) >= 0 ? "blue" : null )
                                    : null 
              }}   />
                    </a>
                </div>
                &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                <div className="kt-widget19__stats">
                    <a href="#" className="kt-widget19__comment" title="Like">
                    <span className="kt-widget19__number kt-font-brand">
                        {this.props.artwork.like ? this.props.artwork.like.length : 0 }
                    </span>
                        <i className="fa fa-thumbs-up" style={{ color : this.props.artwork.like ? (this.props.artwork.like.findIndex(id =>{
                                         return id === this.props.userId
                                    }) >= 0 ? "blue" : null )
                                    : null 
              }} />
                    </a>
                </div>
                &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;
                <div className="kt-widget19__stats">
                    
                    <a href="#" className="kt-widget19__comment" title="Comment">
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
        
    </div>
</div>

{/* <!--end:: Widgets/Blog--> */}
</div>
        </>
        
    );
  }
}

// const mapStateToProps = ({ auth: { user } }) => ({
//   user
// });

// export default connect(mapStateToProps)(DashboardArtworkDisplay);
