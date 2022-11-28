import IDWFORM from "./forms/IDWform";
import IDWFormKids from "./forms/IWDFormKids";
import styles from "./idw.module.css";
// import styles from "./energyreq.module.css";

const IdealBodyWeight =()=>{
    return(
        <section className={styles.main}>
            <div>
                <div>
                   <h3>For adults only</h3>
                    <IDWFORM/> 
                </div>
                <div>
                   <h3>For children</h3>
                    <IDWFormKids/> 
                </div>
                
                {/* <div className={styles.otherArea}>
                    <h4>You're using the <span> {data?.methodName}</span> formula</h4>
                    {data?.kcalResult !==0 && (
                        <>
                        <p className={styles.result}>
                            your BMR is <span>{Math.ceil(data?.bmrResult)} kcal</span></p>
                            <p className={styles.result}>Kilocalorie requirement is <span>{Math.ceil(data?.kcalResult)} kcal</span></p>
                            <p className={styles.result}>Physical activity level is {data?.PAinfo}</p>
                        </>)
                    }
                    
                    {data?.errorInfo&&
                    <p className={styles.errorInf}>{data?.errorInfo}</p>
                    }
                    {data?.warningInfo&&
                        <p className={styles.warningInf}>NOTE: {data?.warningInfo}</p>
                    }
                    <div className={styles.methodContainer}>
                        <p>Compare results with other formualae</p>
                        <div id='methodBtns' className={styles.methodList}>
                            <p id='methodBtnIM' className={styles.kid} onClick={handleIM}>Institute of medicine</p>
                            <p className={styles.kid} onClick={handleHO}>Henry Oxford</p>
                            <p className={styles.kid} onClick={handleMST}>Mifflin St. Jeor</p>
                            <p className={styles.kid} onClick={handleSCHO}>Schofield</p>
                            <p className={styles.kid} onClick={handleCUNN}>Cunningham</p>
                            <p className={styles.kid} onClick={handleHB}>Harris-Benedict</p>
                            <h6>Which of these formualae is best?</h6>
                            <h6>Which one perfectly fits into your needs?</h6>
                            <h6 onClick={()=>router.push('/faq')}>Visit our Frequently Asked Questions section</h6>
                        </div>
                    </div>
                </div> */}
            </div>
      </section>
    )
}

export default IdealBodyWeight;