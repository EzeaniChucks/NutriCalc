import styles from './main.module.css'
import {useRouter} from 'next/router'
import {IoIosArrowForward, IoMdArrowDropright} from 'react-icons/io'
import { HiArrowRight } from "react-icons/hi";
const Main =()=>{
    const router = useRouter()

    const handleNavigation =(e)=>{
        const {name} =e.target.dataset
        if(name==='energyAdult') router.push('/energy-requirements');
        if(name==='idealWeight') router.push('/ideal-body-weight');
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.calcSection}>
                <h3>What would you like to do?</h3>
                <p onClick={handleNavigation} data-name ='energyAdult'><HiArrowRight/> Energy requirements (for adults)</p>
                <hr />
                <p onClick={handleNavigation} data-name ='energy'><HiArrowRight/> Energy requirements (paediatrics)</p>
                <hr />
                <p><HiArrowRight/> Estimate height</p>
                <hr />
                <p onClick={handleNavigation} data-name ='idealWeight'><HiArrowRight/> Ideal body weight</p>
                <hr />
                <p><HiArrowRight/> Fat Mass/Fat free mass</p>
                <hr />
                <p><HiArrowRight/> Analyze 24-hr dietary recall</p>
            </div>
        </main>
    );
}

export default Main