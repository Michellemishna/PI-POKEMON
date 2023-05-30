import {Link} from 'react-router-dom';
import {Searchbar} from '../index'
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.Navegation}>
        <img alt="img" className={style.imgs} src="https://25.media.tumblr.com/a1e87d2030a73aee16661e8807da6c1d/tumblr_mkhnmmFwaA1rxvkeso1_500.gif"/>
        <Link to='/home'>
        <p>Home</p>
        </Link> 
        <Link to='/form'>
        <p>Create Pokemon</p>
        </Link> 
        <Searchbar />
        </div>
    )
}

export default NavBar;