import styles from './main.module.css'
import {useRouter} from 'next/router'
import {IoIosArrowForward} from 'react-icons/io'
const Main =()=>{
    const router = useRouter()

    const handleNavigation =(e)=>{
        const {name} =e.target.dataset
        if(name==='energyAdult') router.push('/energy-requirements')
    }
    return (
        <main className={styles.main}>
            <div className={styles.calcSection}>
                <h3>What would you like to do?</h3>
                <p onClick={handleNavigation} data-name ='energyAdult'><IoIosArrowForward/> Energy requirements (for adults)</p>
                <hr />
                <p onClick={handleNavigation} data-name ='energy'><IoIosArrowForward/> Energy requirements (paediatrics)</p>
                <hr />
                <p><IoIosArrowForward/> Estimate height</p>
                <hr />
                <p><IoIosArrowForward/> Ideal body weight</p>
                <hr />
                <p><IoIosArrowForward/> Fat Mass/Fat free mass</p>
                <hr />
                <p><IoIosArrowForward/> Analyze 24-hr dietary recall</p>
                <hr />
            </div>
        </main>
    );
}

export default Main