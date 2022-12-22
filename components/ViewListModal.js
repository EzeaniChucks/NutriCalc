import styles from "./24hrComp.module.css";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
const ViewListModal = ({ dispatch }) => {
  return (
    <div className={styles.modalDiv}>
      <div>
        <FaTimesCircle onClick={() => dispatch({ type: "VIEWLIST_MODAL" })} />
        <p>Currently Working on this</p>
        <h4>Functionality will be available in few hours</h4>
      </div>
    </div>
  );
};

export default ViewListModal;
