/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import objectPath from "object-path";
import { withRouter } from "react-router-dom";
import { QuickActions } from "./components/QuickActions";
import { SortBy } from './components/SortBy';
import { LayoutContextConsumer } from "../LayoutContext";
import { ReactComponent as SortNum1Icon } from "../../../_metronic/layout/assets/layout-svg-icons/SortNum1.svg";
import * as builder from "../../ducks/builder";
import Dropdown from "react-bootstrap/Dropdown";
// import BreadCrumbs from "./components/BreadCrumbs";

const QuickActionsDropdownToggle = React.forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      href="#"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
      id="kt_dashboard_daterangepicker"
      className="btn btn-icon"
    >
      {" "}
        <SortNum1Icon className="kt-svg-icon kt-svg-icon--sm" />
    </a>
  );
});


class SubHeader extends React.Component {
  render() {
    const {
      subheaderCssClasses,
      subheaderContainerCssClasses,
      subheaderMobileToggle
    } = this.props;
    return (
      <div
        id="kt_subheader"
        className={`kt-subheader ${subheaderCssClasses} kt-grid__item`}
      >
        <div className={`kt-container ${subheaderContainerCssClasses}`}>
          <div className="kt-subheader__main">
            {subheaderMobileToggle && (
              <button
                className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
                id="kt_subheader_mobile_toggle"
              >
                <span />
              </button>
            )}

            <LayoutContextConsumer>
              {/*{({ subheader: { title, breadcrumb } }) => (*/}

              {({ subheader: { title } }) => (
                <>
                  <h3 className="kt-subheader__title">{title}</h3>
                  {/*<BreadCrumbs items={breadcrumb} />*/}
                </>
              )}
            </LayoutContextConsumer>

            <span className="kt-subheader__separator kt-subheader__separator--v" />
            {/* <span className="kt-subheader__desc">#XRS-45670</span> */}
            <a
              href="#"
              className="btn btn-label-warning btn-bold btn-sm btn-icon-h kt-margin-l-10"
            >
              <i className="kt-nav__link-icon flaticon-add" />
              Add New Device
            </a>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  config: store.builder.layoutConfig,
  menuConfig: store.builder.menuConfig,
  subheaderMobileToggle: objectPath.get(
    store.builder.layoutConfig,
    "subheader.mobile-toggle"
  ),
  subheaderCssClasses: builder.selectors.getClasses(store, {
    path: "subheader",
    toString: true
  }),
  subheaderContainerCssClasses: builder.selectors.getClasses(store, {
    path: "subheader_container",
    toString: true
  })
});

export default withRouter(connect(mapStateToProps)(SubHeader));
