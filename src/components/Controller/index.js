import { useSession } from '@/hooks/useSession'
import styles from './styles.module.css'

export default function Controller ({country}) {
    const { changeScore, deleteGuess } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { userGuess } = Object.fromEntries(new FormData(e.target))
        if(userGuess){
            country.name.toLowerCase() == userGuess.toLowerCase() ? changeScore(10) : changeScore(-1)
            deleteGuess(country);
            e.target.reset()
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.controller}>
            <input type="text" className={styles.controllerInput} name='userGuess'/>
            <button className={styles.controllerButton}>Intentar</button>
        </form>
    )
}