import menu from '../icons/navbar_menu.svg'
import home from '../icons/navbar_home.svg'
import about from '../icons/navbar_aboutme.svg'
import resume from '../icons/navbar_resume.svg'
import portfolio from '../icons/navbar_portfolio.svg'
import contact from '../icons/navbar_contact.svg'

const NavBarButton = ({type}) => {
    let image = null
    let link = null

    switch (type) {
        case 'home':
            image = home
            link = '#block-0'
            break;
        case 'about':
            image = about
            link = '#block-1'
            break;
        case 'resume':
            image = resume
            link = '#block-2'
            break;
        case 'portfolio':
            image = portfolio
            link = '#block-3'
            break;
        case 'contact':
            image = contact
            link = '#block-4'
            break;
        default:
            break;
    }
    return (
        <div className='fixed-right'>
            <div className='navbarbutton-container'>
                <a href={link}>
                    <img className='navbarbutton-image' src={image}></img>   
                </a>
            </div>
        </div>
    
    );
};

export default NavBarButton;