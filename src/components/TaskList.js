import React from 'react';
import plus from '../plus.png'
import TaskListContext from '../contexts/TaskListContext';
import trash from '../trash.png'
const TaskList= ()=> {
    return(
        <div>
            <TaskListContext.Consumer>
                {
                    (context) =>(
                        <div>
                           <h1>{context.title} &nbsp;
                            <img src={plus} height='22px' width='22px' onClick={() => context.handleAdd(context.id)} />
                               
                            </h1> <ul>
                                { context.task.map((t,i)=>(
                                           <li>{t}<img src={trash} height='17px' width ='17px' onClick={()=> context.handleDelete(context.id,t)}></img></li>
                                       ))}
                                
                            </ul>
                        </div>
                    )
                }
            </TaskListContext.Consumer>
        </div>
    );
}

export default TaskList;
