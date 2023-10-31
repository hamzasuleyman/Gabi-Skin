import React from "react";
import "./advantage.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SellIcon from "@mui/icons-material/Sell";
import PaymentIcon from "@mui/icons-material/Payment";

function Advantage() {
  return (
    <div className="gabiskin__advantage">
      <h1 className="gabiskin__advantage-title">Our Advantages</h1>
      <div className="gabiskin__advantage-main">
        <div className="gabiskin__advantage-main__first">
          <div className="gabiskin__advantage-main__first-left">
            <LocalShippingIcon className="icon-red" />
          </div>
          <div className="gabiskin__advantage-main__first-right">
            <strong>
              <p>Express Delivery</p>
            </strong>
            <small>
              <p>Ships in 24 Hours</p>
            </small>
          </div>
        </div>
        <div className="gabiskin__advantage-main__second">
          <div className="gabiskin__advantage-main__second-left">
            <SecurityIcon className="icon-red" />
          </div>
          <div className="gabiskin__advantage-main__second-right">
            <strong>
              <p>Brand Warranty</p>
            </strong>
            <small>
              <p>100% Original products</p>
            </small>
          </div>
        </div>
        <div className="gabiskin__advantage-main__third">
          <div className="gabiskin__advantage-main__third-left">
            <SellIcon className="icon-red" />
          </div>
          <div className="gabiskin__advantage-main__third-right">
            <strong>
              <p>Exciting Deals</p>
            </strong>
            <small>
              <p>On all prepaid orders</p>
            </small>
          </div>
        </div>
        <div className="gabiskin__advantage-main__fourth">
          <div className="gabiskin__advantage-main__fourth-left">
            <PaymentIcon className="icon-red" />
          </div>
          <div className="gabiskin__advantage-main__fourth-right">
            <strong>
              <p>Secure Payments</p>
            </strong>
            <small>
              <p>SSL / Secure сertificate</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
