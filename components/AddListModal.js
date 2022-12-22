import styles from "./24hrComp.module.css";
import { FaTimesCircle } from "react-icons/fa";

const AddListModal = ({ clientName, dispatch, handleChange }) => {
  const handleClientAddition = () => {
    setTimeout(() => {
      dispatch({ type: "ADDLIST_MODAL" });
    }, 2000);
  };
  return (
    <div className={styles.modalDiv}>
      <div>
        <FaTimesCircle onClick={() => dispatch({ type: "ADDLIST_MODAL" })} />
        <label>
          Client Name:
          <input
            onChange={handleChange}
            autoComplete="off"
            name="clientName"
            type="text"
            value={clientName}
          />
        </label>
        <label>
          List Name:
          <select>
            <option>Default List</option>
          </select>
        </label>
        <button onClick={handleClientAddition}>Save Client To List</button>
      </div>
    </div>
  );
};

export default AddListModal;
