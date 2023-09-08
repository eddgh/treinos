import styles from './product.module.css';

export default function Product({ product, removeProductFromList }) {

    return (
        <div className={styles.card}>
           <span>O item 01-</span>
           <span>{product}</span>
           <span> - foi adicionado!</span>
            {/* <div className={styles.buttonContainer}>
            <button
            title='Remover item' 
            className={`${styles.button} ${styles.removeButton}`}>✖</button>
        </div> */}
        </div>
    )
}