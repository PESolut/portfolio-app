import menu from '../icons/navbar_menu.svg'

const NavBarButton = () => {
    return (
        <div className='fixed-right'>
            <div className='navbarbutton-container'>
            <img className='navbarbutton-image' src={menu}></img>   
            </div>
        </div>
    
    );
};

export default NavBarButton;