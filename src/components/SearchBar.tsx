import { PlusCircle } from '@phosphor-icons/react'
import styles from './SearchBar.module.css'

import { SearchBarButton } from './SearchBarButton'
import { SearchBarInput } from './SearchBarInput'
import { ButtonHTMLAttributes, ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react'

type FormProps = InputHTMLAttributes<HTMLInputElement> & ButtonHTMLAttributes<HTMLButtonElement> & {
    onAddTask: (title: string) => void
}

export function SearchBar(props: FormProps) {
    const [newTitle, setNewTitle] = useState('')

    function handleNewTitleChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTitle(event.target.value)
    }

    function handleCreateNewTitle(event: FormEvent) {
        event.preventDefault()

        newTitle === '' ? console.log() : props.onAddTask(newTitle)

        setNewTitle('')
    }

    return (
        <>
            <form className={styles.searchBarForm} onSubmit={handleCreateNewTitle}>
                <SearchBarInput
                    placeholder={props.placeholder}
                    value={newTitle}
                    onChange={handleNewTitleChange}
                    required
                ></SearchBarInput>
                <SearchBarButton>Criar<PlusCircle className={styles.icon} size={16} weight="bold"></PlusCircle></SearchBarButton>
            </form>
        </>
    )
}