import React, { useState} from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskListContext from '../contexts/TaskListContext';
import HeaderContext from '../contexts/HeaderContext';

function TaskHooks(){
    const[tasklist,settask] = useState(
        [
            {
                title: 'Humber',
                tasks: ['Task-1','Task-2','Task-3'],
                id : 1 ,
            },
            {
                title: 'Lab',
                tasks: ['Project','Lab','Quiz'],
                id : 2 ,
            },
            {
                title: 'Java',
                tasks: ['Group Discussion','Exam','Assignments'],
                id : 3,
            }
            
        ]
    )
    const removeTask=(id,tname) => {
       settask( tasklist.map(
              item => ({
                        ...item,
                        tasks: item.tasks.filter(o => o !== tname)
                      })
            ))
          
    }
    
    
    const addTask=(id)=>{
        var newItem = prompt("Enter New Title Name");
        var tasksExists = tasklist.map(x => x.tasks.filter(t => t.toLowerCase() === newItem.toLowerCase())).flat(1);
    
        if(tasksExists.length > 0) {
          alert(`${newItem} already exists.`);
          return;
        }
    
        var selectedTask = tasklist.filter(t => t.id === id);
        if(selectedTask.length === 0) return;
        var updatedTask = {
                            ...selectedTask[0],
                            tasks: [...selectedTask[0].tasks, newItem]
                          };
      // settask({tasklist: [updatedTask, ...tasklist.filter(x => x.id !== id)]});
          
        
    }
    return(
        <div className='App'>
            <HeaderContext.Provider value = { {items: "5",title:"Task List"} }>
                <Header></Header>
            </HeaderContext.Provider>
            {
                tasklist.map((t)=>(
                    <TaskListContext.Provider value={{

                        title: t.title,
                        task: t.tasks,
                        id:t.id,
                        handleAdd:addTask,
                        handleDelete : removeTask
                    }}>
                        <TaskList></TaskList>
                        </TaskListContext.Provider>
                ))}
           
        </div>
    )
}   

export default TaskHooks;