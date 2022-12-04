import Nav from './nav.js'
import Logo from './logo.js'
import Footer from './footer.js';
import Head from 'next/head.js';

const Wrapper =({children})=>{
    return (
      <>
        <Head>
          <title>Calorie|Protein requirement|Fat or Fat-free mass|EnCalc</title>
          <meta
            name="description"
            content="Estimate energy, protein and micronutrient requirements. Know your ideal or normal body weight and do much more with Encalc"
          />
          <meta name="keywords"
            content='energy requirement, paediatrics, 24 hour dietary recall, calorie, muscle mass, fat free mass, protein, calculator,'
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Logo />
        <>{children}</>
        <Footer />
      </>
    );
}

export default Wrapper