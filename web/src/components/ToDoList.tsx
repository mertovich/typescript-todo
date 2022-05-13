import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'

interface Props {
    todoList: string[],
    deleteTask: (task: string) => void
}

const ToDoList: React.FC<Props> = ({ todoList, deleteTask }) => {
    return (
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>To Do</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map((todo, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{todo}</td>
                                <td><Button onClick={() => deleteTask(todo)} variant="danger">Danger</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ToDoList