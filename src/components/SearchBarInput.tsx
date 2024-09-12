import { InputHTMLAttributes } from 'react'
import styles from './SearchBarInput.module.css'

interface AllInputProps extends InputHTMLAttributes<HTMLInputElement>{
    
}

export function SearchBarInput(props: AllInputProps) {
    return (
        <>
            <input 
            className={styles.inputBar}
                {...props}
            ></input>
        </>
    )
}