import logo from '../../assets/logo (1).png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className='w-28' src={logo} alt="" />
                    <h3>Copyright © 2023 - All right reserved</h3>
                    <div className="grid grid-flow-col gap-4">
                        <i className="fa-brands fa-facebook text-2xl cursor-pointer"></i>
                        <i className="fa-brands fa-twitter text-2xl cursor-pointer"></i>
                        <i className="fa-brands fa-instagram text-2xl cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i>
                        <i className="fa-brands fa-youtube text-2xl cursor-pointer"></i>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover"> Web Development</a>
                    <a className="link link-hover">Graphics Design</a>
                    <a className="link link-hover">Digital Marketing</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;