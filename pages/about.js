import styles from '../styles/about.module.css'

const About =()=>{
    return(
        <div className={styles.main}>
            <div>
                <p>There are quite a number of predictive-equation formulae and calculators online</p>
                <p>These webapps either aren't easy to nagivate (with their cluttered, convoluted user interface) or do not have the mechanism for comparing formulas, more so doing this on a single page.</p>
                <p>NutriCalc was created to solve these issues. It was programmed with simplicity in mind.</p>
                <p>The 24-dietary hour recall section is coded based on the food composition table of Nigerian/African foods
                    (published by the Nutrition Society of Nigeria),
                    the first of its kind, since before now other 24-HDR analysis apps are based on non-African foods.
                </p>
                <p>I hope you enjoy the seemless experience and features on NutriCalc. Your suggestions for improvement are also highly welcome</p>
                <h5>Ezeani Chucks <span>(RDN, BSc, NIM)</span></h5>
            </div>
        </div>
    )
}

export default About;