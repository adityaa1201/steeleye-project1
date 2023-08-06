import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({
    "buySellIndicator": "",
    "orderStatus": "",
    "orderType": ""
  });
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({
    "orderReceived": "",
    "orderStatusUpdated": "",
    "orderSubmitted": ""
  });

  function handleClick(event) {
   
    setSelectedOrderDetails({
      "buySellIndicator": mockData.results[parseInt(event.target.id)].executionDetails.buySellIndicator,
      "orderStatus": mockData.results[parseInt(event.target.id)].executionDetails.orderStatus,
      "orderType": mockData.results[parseInt(event.target.id)].executionDetails.orderType
    });
    setSelectedOrderTimeStamps({
      "orderReceived": timestamps.results[parseInt(event.target.id)].timestamps.orderReceived,
      "orderStatusUpdated": timestamps.results[parseInt(event.target.id)].timestamps.orderStatusUpdated,
      "orderSubmitted": timestamps.results[parseInt(event.target.id)].timestamps.orderSubmitted
    });
  }

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <div onClick={handleClick}>
        <List rows={mockData.results} currency={currency}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
