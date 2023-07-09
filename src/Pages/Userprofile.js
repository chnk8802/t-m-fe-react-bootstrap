import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ProfilePicture from '../Components/ProfilePicture';
import { PencilSquare } from 'react-bootstrap-icons';
import Header from '../Components/Header';
import Footer from '../Components/Footer'

function Userprofile(props) {
    return (
        <div className='d-flex flex-column vh-100'>
            <Header {...props} />
            <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1'>
                <div className='d-flex flex-row justify-content-center align-items-center w-50 row'>
                    <ProfilePicture imageDimension={{ width: "10rem", height: "10rem" }} imageSource={"https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku.jpg"} thumbnail={true} />
                    <div className='d-flex flex-column w-100 col'>
                        <span className='fs-1 fw-bold w-100'>{"Mark Son Goku"}</span>
                        <span className=''>{"example@email.com"}</span>
                    </div>
                </div>
                <div className='py-5 w-50'>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload New Profile Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </div>
                <div className='w-50'>
                    <Table >
                        <tbody>
                            <tr>
                                <td className='fw-bold'>User Name</td>
                                <td>Mark Son Goku</td>
                                <td><Button className='btn-primary pb-2'><PencilSquare /></Button></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Age</td>
                                <td>22</td>
                                <td><Button className='btn-primary pb-2'><PencilSquare /></Button></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>update Password</td>
                                <td >***********</td>
                                <td><Button className='btn-primary pb-2'><PencilSquare /></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Userprofile;

// import { useState } from 'react';
// import ProfilePicture from '../Components/ProfilePicture';
// import Form from 'react-bootstrap/esm/Form';

// function Userprofile() {
//     const [isEditMode, setIsEditMode] = useState(false);
//     const handleEditMode = () => {
//         setIsEditMode(!isEditMode);
//     };
//     return (
//         <div className='d-flex flex-column justify-content-center'>
//             <div className='p-5'>
//                 <ProfilePicture imageDimension={{ width: "10rem", height: "10rem" }} imageSource={"https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku.jpg"} thumbnail={true} />
//             </div>
//         </div>
//     );
// }

// export default Userprofile;