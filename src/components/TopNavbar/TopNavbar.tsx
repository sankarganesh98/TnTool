import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Bell } from 'react-bootstrap-icons';
import styles from '../../styles/TopNavbar.module.css';

function TopNavbar() {
    const location = useLocation();

    const titles: { [key: string]: string } = {
        "overview": "Overview-Dashboard",
        "personal": "Personal-Dashboard",
        "fiv": "Future Impact Vault",
        "account": "Account"
    };

    const pathSegment = location.pathname.substring(1);
    const title = titles[pathSegment] || capitalizeFirstLetter(pathSegment);

    return (
        <Navbar bg="light" expand="lg" className={styles.topNavbar}>
            <Navbar.Brand href="#home" className={styles.pageTitle}>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.navRight}>
                    <div className={styles.navContent}>
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                        <Nav.Link href="#notifications" className="ml-3">
                            <Bell size={20} />
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default TopNavbar;
