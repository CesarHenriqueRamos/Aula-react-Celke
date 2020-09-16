import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">RamosTecnolog</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Site </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/CesarHenriqueRamos">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="sobre-empresa">Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="contato">Contato</NavLink>
                        </NavItem>                        
                    </Nav>                   
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;