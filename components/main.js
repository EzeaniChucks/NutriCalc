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
        if(name==='estimate height') router.push('/estimate-height');
        if(name==='energy') router.push('/energy-req-paed');
        if(name==='FM/FFM') router.push('/fat-mass-ffmass');
        if(name==='24hrRecall') router.push('/24-hr-recall');
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.calcSection}>
                <h3>What would you like to do?</h3>
                <p onClick={handleNavigation} data-name ='energyAdult'><HiArrowRight/> Energy requirements (for adults)</p>
                <hr />
                <p onClick={handleNavigation} data-name ='energy'><HiArrowRight/> Energy requirements (paediatrics)</p>
                <hr />
                <p onClick={handleNavigation} data-name ='estimate height'><HiArrowRight/> Estimate height</p>
                <hr />
                <p onClick={handleNavigation} data-name ='idealWeight'><HiArrowRight/> Ideal body weight</p>
                <hr />
                <p onClick={handleNavigation} data-name ='FM/FFM'><HiArrowRight/> Fat Mass/Fat free mass</p>
                <hr />
                <p onClick={handleNavigation} data-name ='24hrRecall'><HiArrowRight/> Analyze 24-hr dietary recall</p>
            </div>
        </main>
    );
}

export default Main