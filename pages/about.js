import styles from '../styles/about.module.css'

const About =()=>{
    return(
        <div className={styles.main}>
            <div>
                <p>There are quite a number of predictive-equation formulae and calculators online</p>
                <p>These webapps either aren't easy to navigate (with their cluttered, convoluted user interface) or do not have the mechanism for comparing formulas, more so achieving this on a single page.</p>
                <p>EnCalc was created to fill this gap with its simple, easy-to-use design.</p>
                <p>The 24-dietary hour recall section is built based on a Nigerian/African food composition table
                    (published by the Nestle Nigeria and Department of Human Nutrition and Dietetics, University of Ibadan),
                </p>
                <p>I hope you enjoy the seemless experience and features on enCalc. Your suggestions for improvement are also highly welcome</p>
                <h5>Ezeani Chucks <span>(RDN, BSc, NIM)</span></h5>
            </div>
        </div>
    )
}

export default About;