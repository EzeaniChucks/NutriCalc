import styles from '../idw.module.css';

const IDWFORM = ({}) => {
  
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
              // onChange={captureChnage}
              type="radio"
              value={"male"}
              name="sex"
            />
            F{" "}
            <input
              className={styles.radios}
              // onChange={captureChnage}
              type="radio"
              value={"female"}
              name="sex"
            />
          </label>
        </div>
        <label>
          age in years:
          <input
            type="number"
            // value={age}
            name="age"
            // onChange={captureChnage}
          />
        </label>
        <label>
          height in m:
          <input
            type="number"
            // value={height}
            name="height"
            // onChange={captureChnage}
          />
        </label>
        {/* <label>
          P. activity level:
          <select onChange={captureChnage} id="selectTagPa" name="physical-act">
            <option value={Pvals.sedentary}>Sedentary</option>
            <option value={Pvals.lightlyActive}>Lightly Active</option>
            <option value={Pvals.moderatelyActive}>Moderately active</option>
            <option value={Pvals.extraActive}>Extra Active</option>
            {methodName === 'Schofield' && <option value={Pvals.extremelyActive}>Extremely Active</option>}
          </select>
        </label> */}
        <button type="button">
          Generate Result
        </button>
      </form>
    </div>
  );
};

export default IDWFORM