import styles from "../idw.module.css";

const FatMassForm = ({ data, captureChange, genResultLength }) => {
  const { height, waistCir, ulnalength, kneelength, demispan, methodName } = data;
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
              name="sex"
            />
            F{" "}
            <input
              className={styles.radios}
              onChange={captureChange}
              type="radio"
              value={"female"}
              name="sex"
            />
          </label>
        </div>
        <label>
          height:
          <div>
            <input
              type="number"
              value={height}
              className={styles.childage}
              name="height"
              onChange={captureChange}
            />
            <select name={'heightUnit'} onChange={captureChange}>
                <option value={'centimeters'}>cm</option>
                <option value={'inches'}>Inches</option>
                <option value={'meters'}>meters</option>
            </select>
          </div>
        </label>
        <label>
          waist circ: 
          <div>
            <input
              type="number"
              value={waistCir}
              className={styles.childage}
              name="waistCir"
              onChange={captureChange}
            />
            <select name={'waistUnit'} onChange={captureChange}>
                <option value={'centimeters'}>cm</option>
                <option value={'inches'}>Inches</option>
                <option value={'meters'}>meters</option>
            </select>
          </div>
        </label>
        <button onClick={genResultLength} type="button">
          Generate Result
        </button>
      </form>
    </div>
  );
};
export default FatMassForm;
