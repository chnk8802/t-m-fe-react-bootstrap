import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Trash3} from 'react-bootstrap-icons';

function Task({isError}) {
    const [isEditMode, setIsEditMode] = useState(false);
    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
            <Form id='taskcard' className="row p-3 d-flex justify-content-center gap-2 border rounded w-75">
              <Form.Group className="col-11 py-1 d-flex flex-column justify-content-center" controlId="formBasicCheckbox">

                <Form.Check className="m-0 d-flex align-items-center gap-3 fs-3" type="checkbox"/>

                { isEditMode ? 
                <Form.Control className="text-muted my-3 d-flex align-items-center" label="Task Title" placeholder='Enter Task Title' required/>
                 : 
                 <Form.Label className='my-3 fs-5 fw-bold'>Whatever Task Title</Form.Label> }

                { isEditMode ? 
                <Form.Control className="text-muted mb-3 p-2 d-flex align-items-center" as="textarea" placeholder='Enter Task Description' rows="3" maxLength={250} required/> 
                :
                 <Form.Label className='mb-3'>{"We'll never share your email with anyone else.We'll never share your email with anyone else.We'll never share your email with anyone else. We'll never share your email with anyone else.We'll never share your email with anyone else.We'll never share your email with anyone else.We'll never share your email with anyone else.We'll never share your email with anyone else.We'll never share your email with anyone else."}</Form.Label> }

                 {/* ==== Task saving Error Display ==== */}
                {(isError) ? <h6 className='text-danger'>{"Error: Task not saved!"}</h6> : <h6 className='text-success'>{"Task saved!"}</h6> }
                 {/* ==== Task saving Error Display ==== */}


                <Button onClick={handleEditMode}>
                    {isEditMode ? "Save Task" : "Edit Task"}
                </Button>

              </Form.Group>
              <Form.Group className='col d-flex gap-2 justify-content-center'>
                <Form.Text className="text-muted m-0 d-flex align-items-center">
                <Button className='btn-danger'>
                <Trash3 />
                </Button>
                </Form.Text>
              </Form.Group>
            </Form>
            </div>
          );
    }


export default Task;