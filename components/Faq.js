import { useState } from "react";
import styles from '../components/faq.module.css';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq = ({title, content})=>{
    const [displayCont, setDisplayCont] = useState(false);
    return (
      <div className={styles.faqCont}>
        <div onClick={() => setDisplayCont(!displayCont)}>
          <h5>{title}</h5>
          {displayCont ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {content?.map((parag, index) => {
          return (
            <div className={styles.parag} key={index}>
              {displayCont && <p>{parag}</p>}
            </div>
          );
        })}
      </div>
    );
}

export default Faq;