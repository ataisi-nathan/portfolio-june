import Logo from '../assets/logo.png'

function Header() {
    return(
        <header>
            <img src={Logo} alt="A laptop with a text Ataisi Nathan underneath it." />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;