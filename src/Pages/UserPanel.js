import Header from '../Components/Header';
import Task from '../Components/Task';
import Footer from '../Components/Footer';

const tasks = [{
    id: 1,
    title: "Title 1",
    description: "Description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit dapibus lorem quis blandit. Sed interdum ultrices auctor. Curabitur maximus orci a ultrices fringilla. Suspendisse molestie urna rutrum fermentum sodales. Nullam sodales dui."
}, {
    id: 2,
    title: "Title 2",
    description: "Description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit dapibus lorem quis blandit. Sed interdum ultrices auctor. Curabitur maximus orci a ultrices fringilla. Suspendisse molestie urna rutrum fermentum sodales. Nullam sodales dui."
},
{
    id: 3,
    title: "Title 3",
    description: "Description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit dapibus lorem quis blandit. Sed interdum ultrices auctor. Curabitur maximus orci a ultrices fringilla. Suspendisse molestie urna rutrum fermentum sodales. Nullam sodales dui."
},
{
    id: 4,
    title: "Title 4",
    description: "Description 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit dapibus lorem quis blandit. Sed interdum ultrices auctor. Curabitur maximus orci a ultrices fringilla. Suspendisse molestie urna rutrum fermentum sodales. Nullam sodales dui."
}
];


function Userpanel(props) {
    return (
        <div className="vh-100 d-flex flex-column">
            <div className='flex-grow-1'>
                <Header {...props} />
                {tasks.map((task) => (<Task key={task.id} title={task.title} description={task.description} show={props.show} />))}
            </div>
            <Footer />
        </div>
    );
}
export default Userpanel; 