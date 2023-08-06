import styles from "./ListRowCell.module.css";

const ListRowCell = ({ children, ind}) => {
  return <td className={styles.cell} id={ind+".1"}>{children}</td>;
};

export default ListRowCell;
