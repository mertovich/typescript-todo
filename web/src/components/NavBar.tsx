import React from 'react'
import { Navbar, Container} from 'react-bootstrap'

type Props = {}

const NavBar: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">TypeScript To Do</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar