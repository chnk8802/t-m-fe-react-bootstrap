import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup({isError}) {

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="dark p-5 w-50 border rounded" noValidate>
      <Form.Group className="mb-3" controlId="formGroupName-su">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail-su">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAge-su">
        <Form.Label>Age</Form.Label>
        <Form.Control required type="number" placeholder="Enter Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword-su">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      {isError ? <div className="py-2">
        <h6 className='text-danger'>{"Error: Placeholer for Error!"}</h6>
      </div> : 
      <div className="d-flex gap-3 py-2">
        <h6 className='text-success'>{"Sign up Successfull!"}</h6>
    </div> 
      }
      <Button variant="primary" type="submit">
        Signup
      </Button>
      <div className="d-flex gap-2 pt-4">
        <h6 className='text-secondary'>Don't have an account?</h6>
        <b><a href="/" className="text-decoration-none">Login</a></b>
      </div>
    </Form>
    </div>
  );
}

export default Signup;