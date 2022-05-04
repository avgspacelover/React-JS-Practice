//import { useState } from 'react';
import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, sendRequest} =useHttp()

// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);

  const createTask =(taskText, taskData) => {

      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);

  }

  const enterTaskHandler = async (taskText) => {

    sendRequest({
      
      url:'https://reactcg-http-default-rtdb.firebaseio.com/tasks.json', 
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, createTask.bind(null,taskText)           //HAVE TO UNDERSTAND THIS-> 15.10
    );

 
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

/*

   setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://reactcg-http-default-rtdb.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
*/