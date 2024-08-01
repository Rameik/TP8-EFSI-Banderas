import styles from './styles.module.css'

export default function Controller ({country}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const { userGuess } = Object.fromEntries(new FormData(e.target))
        if(userGuess){
            country.name.toLowerCase() == userGuess.toLowerCase() ? console.log('Correct') : console.log('Incorrect')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.controller}>
            <input type="text" className={styles.controllerInput} name='userGuess'/>
            <button className={styles.controllerButton}>Intentar</button>
        </form>
    )
}