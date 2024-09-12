import { Trash } from '@phosphor-icons/react'
import styles from './ToDoList.module.css'
import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export interface TaskProps {
    id: string,
    title: string,
    isComplete: boolean,
    createdAt: Date
}

interface ToDoListProps {
    task: TaskProps
    onDeleteTask: (task: TaskProps) => void
    onCompleteTask: (task: TaskProps) => void
}

export function ToDoList(props: ToDoListProps) {

    const [marked, setMarket] = useState(props.task.isComplete)

    function handleChange() {
        setMarket((state) => {
            return !state
        })
    }

    function handleCompleteTask() {
        props.onCompleteTask(props.task)
    }

    function handleDeleteTask() {
        props.onDeleteTask(props.task)
    }

    const createdTaskTime = format(props.task.createdAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const createdDateRelativeToNow = formatDistanceToNow(props.task.createdAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <>
            <div className={styles.contentFilled}>
                <div className={styles.leftContent}>
                    <input
                        type='checkbox'
                        checked={marked}
                        onChange={() =>{
                            handleChange();
                            handleCompleteTask()
                        }}
                        className={styles.checkbox}
                    ></input>
                        <div className={styles.taskInfo}>
                            <label className={styles.text}>{props.task.title}</label>
                            <time title={createdTaskTime} dateTime={props.task.createdAt.toISOString()} className={styles.date}>Criado: {createdDateRelativeToNow}</time>
                        </div>
                </div>

                <button
                    className={styles.button}
                    onClick={handleDeleteTask}
                ><Trash size={24}></Trash></button>
            </div>
        </>
    )
}