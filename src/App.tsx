import { useState } from 'react'
import './App.css'
import styles from "./App.module.css"
//components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import Modal from "./components/Modal"
//interface
import { ITask } from './interfaces/Task'
function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      }
    ))
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")
    display ? modal!.classList.remove("hide") : modal!.classList.add("hide")
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id:number, title:string, difficulty:number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)
    hideOrShowModal(false)
  }
  return (
    <div>
      <Modal>
        <TaskForm handleUpdate={updateTask} btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate} />
      </Modal>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} task={taskToUpdate} />
        </div>

        <div>
          <h2>Suas tarefas: </h2>
          <TaskList handleDelete={deleteTask} taskList={taskList} handleEdit={editTask} />
        </div>
        
      </main>
      <Footer />
    </div>
  )
}

export default App
