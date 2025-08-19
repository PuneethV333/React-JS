import React from 'react';
import CardTaskList from './cardTaskList';

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-10 h-[45%] md:justify-between">
      <CardTaskList color="bg-blue-500" text="New Task" count={data.taskCount.newtask} key="1" />
      <CardTaskList color="bg-lime-600" text="Completed" count={data.taskCount.completed} key="2" />
      <CardTaskList color="bg-yellow-600" text="Accepted" count={data.taskCount.accepted} key="3" />
      <CardTaskList color="bg-amber-700" text="Failed" count={data.taskCount.failed} key="4" />
    </div>
  );
};

export default TaskListNumber;
