import styles from "../idw.module.css";

const KcalFormKids = ({ data, captureChange, genResultKid }) => {
  const { childage, childweight } = data;
  return (
    <div className={styles.workArea}>
      <p>Enter values</p>
      <form>
        <div>
          Sex:{" "}
          <label>
            M
            <input
              className={styles.radios}
              onChange={captureChange}
              type="radio"
              value={"male"}
              name="childgender"
            />
            F{" "}
            <input
              className={styles.radios}
              onChange={captureChange}
              type="radio"
              value={"female"}
              name="childgender"
            />
          </label>
        </div>
        <label>
          age:
          <div>
            <input
              type="number"
              value={childage}
              className={styles.childage}
              name="childage"
              onChange={captureChange}
            />
            <select
              id="childageid"
              name="childageindicator"
              onChange={captureChange}
            >
              <option value="month">month(s)</option>
              <option value="year">year(s)</option>
            </select>
          </div>
        </label>
        <label>
          weight:
          <div>
            <input
              type="number"
              value={childweight}
              className={styles.childheight}
              name="childweight"
              onChange={captureChange}
            />
            <p style={{margin:'0', padding:'0 5px 3px 0',fontSize:'0.8rem'}}>Kg</p>
            {/* <select
              name="childheightindicator"
              id="childheightid"
              onChange={captureChange}
            >
              <option value="centimeters">cm</option>
              <option value="meters">meters</option>
            </select> */}
          </div>
        </label>
        <button onClick={genResultKid} type="button">
          Generate Result
        </button>
      </form>
    </div>
  );
};

export default KcalFormKids;
