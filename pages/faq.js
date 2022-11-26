import Faq from "../components/Faq";
import { faq } from "../utils/data";
import styles from '../components/faq.module.css'

import { useState } from "react";

const FAQ =()=>{
    const [questions, setQuestions] = useState(faq)
    return (
      <div className={styles.main}>
        <p>frequently asked questions</p>
        <div>
           {questions.map((indFAQ) => {
                return <Faq key={indFAQ.id} {...indFAQ}/>
           })}
        </div>
      </div>
    );
}

export default FAQ;