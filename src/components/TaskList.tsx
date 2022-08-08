import React from 'react'
//interface 
import {ITask} from "../interfaces/Task"
//styles
import styles from "./TaskList.module.css"
import {BiPencil, BiTrash} from "react-icons/bi"
type Props = {
  taskList:ITask[]
  handleDelete(id:number):void
  handleEdit(task:ITask):void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
      {
      taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i onClick={() => handleEdit(task)}><BiPencil /></i>
              <i onClick={() =>{handleDelete(task.id)}}><BiTrash /></i>
              
              
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas</p>
      )
    }
    </>
  )
}

export default TaskList