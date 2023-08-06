import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import timestamp from "../../assets/timeStamps.json";

const List = ({ rows, currency }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row,ind) => (
          <ListRow key={ind}>
            <ListRowCell ind={ind}>{row["&id"]}</ListRowCell>
            <ListRowCell ind={ind}>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell ind={ind}>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell ind={ind}>{timestamp.results[ind].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell ind={ind}>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
