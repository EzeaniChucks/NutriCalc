import styles from "../idw.module.css";

const IDWFormKids = ({data, captureChange, genResult}) => {
  const {childage, childheight}= data
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
                <select name="childageindicator" onChange={captureChange}>
                    <option value='month'>month(s)</option>
                    <option value='year'>year(s)</option>
                </select> 
            </div>
        </label>
        <label>
        height:
            <div>
               <input
                type="number"
                value={childheight}
                className={styles.childheight}
                name="childheight"
                onChange={captureChange}
                />
                <select name="childheightindicator" onChange={captureChange}>
                    <option value='centimeters'>cm</option>
                    <option value='meters'>meters</option>
                </select> 
            </div>
        </label> 
        <button onClick={genResult} type="button">Generate Result</button>
      </form>
    </div>
  );
};

export default IDWFormKids;