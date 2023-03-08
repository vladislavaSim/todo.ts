import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import {ITask} from "./Interfaces";
import Task from "./components/Task";

const App: FC = () => {
    const [task, setTask] = useState<string>('')
    const [deadline, setDeadline] = useState<number>(0)
    const [list, setList] = useState<ITask[]>([] )

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === 'task') {
            setTask(event.target.value)
        } else {
            setDeadline(+event.target.value)
        }
    }

    const makeTask = (): void => {
        const newTask = {
            taskName: task,
            deadline: deadline
        }
        setList([...list, newTask])
        setTask('')
        setDeadline(0)
    }
  return (
    <div className="App">
      <div className='header'>
          <div className='input-box'>
              <input
                  value={task }
                  name='task'
                  onChange={handleChange}
                  type="text" placeholder='task...'/>
              <input
                  value={deadline}
                  name='deadline'
                  onChange={handleChange}
                  type="number" placeholder='deadline'/>
          </div>
        <button onClick={() => makeTask()}>Add task </button>
      </div>
      <div className='list'>
          <div className='task' style={{color: "white"}}>
              <div>Task Name</div>
              <div>Deadline</div>
          </div>
          {
              list && list.map((task: ITask, key: number) => {
                  return <Task key={key} task={task}/>
              })
          }
      </div>
    </div>
  );
}

export default App;
