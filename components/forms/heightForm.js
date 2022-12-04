import styles from "../idw.module.css";

const HeightForm = ({ data, captureChange, genResultLength }) => {
  const { age, ulnalength, kneelength, demispan, methodName } = data;
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
          age:
          <div>
            <input
              type="number"
              value={age}
              className={styles.childage}
              name="age"
              onChange={captureChange}
            />
            <p style={{margin:'0', padding:'0 5px 3px 0',fontSize:'0.8rem'}}>years</p>
          </div>
        </label>
        {methodName ==='ulna length' && <label>
          ulna length:
          <div>
            <input
              type="number"
              value={ulnalength}
              className={styles.childheight}
              name="ulnalength"
              onChange={captureChange}
            />
            <p style={{margin:'0', padding:'0 5px 3px 0',fontSize:'0.8rem'}}>cm</p>
          </div>
        </label>}
        {methodName ==='demi span' && <label>
          demi span:
          <div>
            <input
              type="number"
              value={demispan}
              className={styles.childheight}
              name="demispan"
              onChange={captureChange}
            />
            <p style={{margin:'0', padding:'0 5px 3px 0',fontSize:'0.8rem'}}>cm</p>
          </div>
        </label>}
        {methodName ==='knee length' && <label>
          knee length:
          <div>
            <input
              type="number"
              value={kneelength}
              className={styles.childheight}
              name="kneelength"
              onChange={captureChange}
            />
            <p style={{margin:'0', padding:'0 5px 3px 0',fontSize:'0.8rem'}}>cm</p>
          </div>
        </label>}
        <button onClick={genResultLength} type="button">
          Generate Result
        </button>
      </form>
    </div>
  );
};

export default HeightForm;