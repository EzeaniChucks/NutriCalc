import styles from './footer.module.css';

const Footer =()=>{
    return (
        <footer className={styles.footer}>
            <h3>Contributors</h3>
            <div className={styles.contributors}>
                <div>
                    <h4>Ezeani Chucks (RDN, Bsc)</h4>
                    <h5>Dietitian/Software developer</h5>
                    <h6>Email: concord_chucks2@yahoo.com</h6>
                    <h6>Phone contact: +2348067268292</h6>
                </div>
                <div>
                    <h4>Ifeoluwa Oyedeji (Msc, RD)</h4>
                    <h5>Dietitian</h5>
                    <h6>Email: ifeoluwaoyedeji@gmail.com</h6>
                    <h6>Phone contact: +2348130556376</h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;