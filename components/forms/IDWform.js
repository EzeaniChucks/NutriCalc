import styles from '../idw.module.css';

const IDWFORM = ({captureChange, data, genResult}) => {
  const {age, height} =  data

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
        <div className={styles.kidsdiv}>
          <label>
            age in years:
          <input
            type="number"
            value={age}
            name="age"
            onChange={captureChange}
          />
        </label>
        </div>
        
        <label>
          height in m:
          <input
            type="number"
            value={height}
            name="height"
            onChange={captureChange}
          />
        </label>
        <button onClick={genResult} type="button">
          Generate Result
        </button>
      </form>
    </div>
  );
};

export default IDWFORM