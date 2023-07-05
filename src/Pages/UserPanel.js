import Header from "../Components/Header";
import Task from "../Components/Task";

function UserPanel({isError}) {
    <>
    <Header />
      <Task isError={isError}/>
    </>
}

export default UserPanel;