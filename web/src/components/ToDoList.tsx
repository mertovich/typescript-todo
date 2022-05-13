import React from 'react'
import { Container, Table } from 'react-bootstrap'

interface Props {
    todoList: string[]
}

const ToDoList: React.FC<Props> = ({todoList}) => {
    return (
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To Do</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map((todo, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{todo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ToDoList