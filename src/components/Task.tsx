import React, {FC} from 'react';
import {ITask} from "../Interfaces";

interface Props {
    task: ITask,
    finishFunc(taskNameToFinish: string): void
}

const Task = ({task, finishFunc}: Props) => {
    return (
        <div className='task'>
            <div>
                <div>
                    {task.taskName}
                </div>
                <div>
                    {task.deadline > 1 ? task.deadline + ' days' : task.deadline + ' day'}
                </div>
            </div>
            <button onClick={() => finishFunc(task.taskName)}>x</button>
        </div>
    );
};

export default Task;