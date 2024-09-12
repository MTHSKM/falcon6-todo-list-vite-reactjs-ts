import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { ToDoList } from './components/ToDoList'
import { v4 as uuidv4 } from 'uuid'
import { ClipboardText } from '@phosphor-icons/react'
import { useState } from 'react'

interface Tasks {
  id: string,
  title: string,
  isComplete: boolean,
  createdAt: Date
}

export function App() {
  // const tasks: Tasks[] | null = [
  //   {
  //     id: uuidv4(),
  //     title: 'primeiro desafio',
  //     isComplete: true
  // },
  // {
  //     id: uuidv4(),
  //     title: 'segundo desafio',
  //     isComplete: false
  // }
  // ]

  const [tasks, setTasks] = useState<Tasks[]>([
    {
          id: uuidv4(),
          title: 'primeiro desafio',
          isComplete: true,
          createdAt: new Date('2024-09-11 15:06:37')
      },
      {
          id: uuidv4(),
          title: 'segundo desafio',
          isComplete: false,
          createdAt: new Date('2024-09-11 15:06:37')
      }
  ])

  function deleteTask(taskToDelete: Tasks) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete
    })

    setTasks(taskWithoutDeletedOne)
  }

  function uptadeCompleteTask(taskToComplete: Tasks) {
    const updatedTask = tasks.map((task) => {
      if(task.id === taskToComplete.id) {
        return { ...task, isComplete: !task.isComplete}
      }
      return task
    })

    setTasks(updatedTask)
  }

  function AddTask(newTitle: string) {
    setTasks(state => [
      ...state,
      {
        id: uuidv4(),
        title: newTitle,
        isComplete: false,
        createdAt: new Date(),
      }
    ])
  }

  return (
    <>
      <Header></Header>
      <div className={styles.content}>
        <SearchBar
        placeholder='Adicione uma nova Tarefa'
        onAddTask={AddTask}
        ></SearchBar>

        <header className={styles.header}>
          <p>Tarefas Criadas: {tasks.length}</p>
          <p>Concluidas: {tasks.reduce((count, task) => {
            return task.isComplete ? count + 1 : count;
          }, 0)}</p>
        </header>

        {
          tasks.length > 0 ?
            (tasks.map((task) => {
              return (
                <ToDoList
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCompleteTask={uptadeCompleteTask}
                ></ToDoList>
              )
            })) :
            (
              <div className={styles.contentEmpty}>
                <ClipboardText size={56} className={styles.icon}></ClipboardText>
                <div className={styles.text}>
                  <strong>
                    Você ainda não tem tarefas cadastradas
                  </strong>
                  <span>
                    Crie tarefas e organize seus itens a fazer
                  </span>
                </div>
              </div>)
        }

      </div>
    </>
  )
}