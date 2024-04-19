import styles from './integracao2.module.css'

export default function integracao2() {
    return (
        <div id={styles.integracao2}>
            <div className={styles.roxo}>Texto 1</div>
            <div className={styles.laranja}>Texto 2</div>
            <div className={styles.marrom}>Texto 3</div>
        </div>
    );
}