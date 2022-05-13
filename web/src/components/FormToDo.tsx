import React,{useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

interface Props {
    addToDo: () => void,
    addTask: (task: string) => void
}

const FormToDo: React.FC<Props> = ({addToDo, addTask}) => {
    const [task, setTask] = useState<string>('');

    const hendleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
        addTask(task);
    }
    return (
        <div>
            <Container style={{display: 'flex'}} >
                <Form.Control onChange={hendleChange} size="lg" type="text" placeholder="To Do" />
                <Button onClick={addToDo} variant="success">Add</Button>
            </Container>
        </div>
    )
}

export default FormToDo