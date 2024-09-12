import { ButtonHTMLAttributes } from 'react'
import styles from './SearchBarButton.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function SearchBarButton(props: ButtonProps) {
    return (
        <>
            <button
                className={styles.buttonBar}
                {...props}
            >
            {props.children}
            </button>
        </>
    )
}