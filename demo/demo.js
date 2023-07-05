// To handle three states (true, false, null) and render different messages accordingly, you can introduce an additional state variable to track the current message type. Here's an updated version of your code that incorporates this approach:

import { useState, useEffect } from 'react';
import Taskcard from './Components/Taskcard';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
    const [isError, setIsError] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let timeoutId;

        if (isError === true) {
            setMessage('Error message');
            timeoutId = setTimeout(() => {
                setIsError(null);
                setMessage('');
            }, 3000);
        } else if (isError === false) {
            setMessage('Success message');
            timeoutId = setTimeout(() => {
                setIsError(null);
                setMessage('');
            }, 3000);
        }

        return () => clearTimeout(timeoutId);
    }, [isError]);

    const handleError = () => {
        setIsError(true);
    };

    const handleSuccess = () => {
        setIsError(false);
    };

    return (
        <div className='App'>
            <Taskcard isError={isError} handleError={handleError} handleSuccess={handleSuccess} />
            <Signup isError={isError} handleSuccess={handleSuccess} />
            <Login isError={isError} handleSuccess={handleSuccess} />
            {message && <p>{message}</p>}
        </div>
    );
}

export default App;
/*
 In this updated code, we introduce a new state variable called `message` to store the message text. The `isError` state can have three values: `true`, `false`, or `null`. Based on the value of `isError`, we set the corresponding message in the `message` state.
 When `isError` is `true` or `false`, we start a timer using `setTimeout` to clear the error or success message after 3 seconds. In the cleanup function, we clear the timeout to prevent memory leaks.
 The `handleError` and `handleSuccess` functions are passed down to child components and can be used to update the `isError` state when an error or success occurs.
 Lastly, we render the `message` in a paragraph tag (`<p>`) conditionally. If there is a message (i.e., `message` is not an empty string), it will be rendered in the UI.
 By incorporating the `message` state, you can display different messages based on the value of `isError` and clear them after 3 seconds. This is a common approach used by many developers to handle notifications or messages in React applications.
 Feel free to adjust the message text or customize the implementation to fit your specific use case. Let me know if you have any further questions!
 */