import {Link} from 'react-router-dom';
import {Searchbar} from '../index'
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.Navegation}>
        <a target="_blank" href='https://www.soyhenry.com/'>
          <img alt="img" src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
        </a>

        <a target="_blank" href='https://github.com/Michellemishna'>
          <img alt="img"  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        </a>

        <a target="_blank" href='https://www.linkedin.com/in/michelle-díaz-garduño-49a57b265/'>
          <img alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://es.reactjs.org/'>
          <img alt="img" src="http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png"/>
        </a>
            
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