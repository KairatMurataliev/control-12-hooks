import React, {useState, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Gallery</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {props.user ?
                            <NavItem>
                                <Button onClick={() => props.logout()}>Logout</Button>
                            </NavItem> :
                            <Fragment>
                                <NavItem>
                                    <NavLink href='/login'>Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/register'>Register</NavLink>
                                </NavItem>
                            </Fragment>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
