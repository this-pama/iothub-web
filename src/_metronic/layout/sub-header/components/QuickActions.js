/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as FilePlusIcon } from "../../assets/layout-svg-icons/File-plus.svg";

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
      <FilePlusIcon className="kt-svg-icon kt-svg-icon--success kt-svg-icon--md" />
    </a>
  );
});

export class QuickActions extends React.Component {
  render() {
    return (
      <>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="quick-actions-tooltip">Quick actions</Tooltip>}
        >
          <Dropdown className="dropdown-inline" drop="down" alignRight>
            <Dropdown.Toggle
              as={QuickActionsDropdownToggle}
              id="dropdown-toggle-quick-actions-subheader"
            />

            <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
              <ul className="kt-nav">
                <li className="kt-nav__head">
                  Post:
                </li>
                <li className="kt-nav__separator" />
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon-upload" />
                    <span className="kt-nav__link-text">Artwork</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-calendar-9" />
                    <span className="kt-nav__link-text">Exhibition</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-photograph" />
                    <span className="kt-nav__link-text">Auction</span>
                  </a>
                </li>
                {/* <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-new-email" />
                    <span className="kt-nav__link-text">Support Case</span>
                    <span className="kt-nav__link-badge">
                      <span className="kt-badge kt-badge--brand kt-badge--rounded">
                        5
                      </span>
                    </span>
                  </a>
                </li> */}
                <li className="kt-nav__separator" />
                <li className="kt-nav__foot">
                  <a className="btn btn-label-brand btn-bold btn-sm" href="#">
                    My Wallet
                  </a>
                  
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </OverlayTrigger>
      </>
    );
  }
}
