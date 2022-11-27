import style from './nav.module.css';
import {useRouter} from 'next/router'

const Nav =()=>{
    const router = useRouter()
    return (
      <nav className={style.nav}>
        <p onClick={() => router.push("/")}>enCalc</p>
        <ul>
          <li onClick={() => router.push("/")}>Home</li>
          <li onClick={() => router.push("/about")}>About</li>
          <li onClick={() => router.push("/faq")}>FAQ</li>
        </ul>
        <button>Login</button>
      </nav>
    );
}

export default Nav