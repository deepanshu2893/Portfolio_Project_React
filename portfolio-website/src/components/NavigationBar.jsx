import React, { useState } from "react"
import { Container, Nav, NavItem, Navbar } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";



export default function NavBar() {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>

                <Nav.Item>
                    <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                        <AiOutlineHome style={{ marginBottom: "2px" }} />
                        Home
                    </Nav.Link>
                </Nav.Item>

                <NavItem>
                    <Nav.Link as = {Link} to = "/about" onClick={() => updateExpanded(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} />
                    About
                    </Nav.Link> 
                </NavItem>
            </Container>
        </Navbar>
    )
}