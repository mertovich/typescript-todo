import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

interface Props {
    addToDo: (todo: string) => void,
}

const FormToDo: React.FC<Props> = ({ addToDo }) => {
    const [task, setTask] = useState<string>('');

    const hendleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    }
    return (
        <div>
            <Container style={{ display: 'flex' }} >
                <Form.Control onChange={hendleChange} size="lg" type="text" placeholder="To Do" />
                <Button onClick={() => addToDo(task)} variant="success">Add</Button>
            </Container>
        </div>
    )
}

export default FormToDo