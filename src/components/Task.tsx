import React from 'react';
import {ITask} from "../Interfaces";

interface Props {
    task: ITask;
}

const Task = ({task}: Props) => {
    return (
        <div className='task'>
            <div>
                {task.taskName}
            </div>
            <div>
                {task.deadline > 1 ? task.deadline + ' days' : task.deadline + ' day'}
            </div>
        </div>
    );
};

export default Task;