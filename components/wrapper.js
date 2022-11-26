import Nav from './nav.js'
import Logo from './logo.js'
import Footer from './footer.js';
import Head from 'next/head.js';

const Wrapper =({children})=>{
    return (
      <>
        <Head>
          <title>NutriCalc</title>
          <meta
            name="description"
            content="Get the most accurate estimated enery requirements and more"
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