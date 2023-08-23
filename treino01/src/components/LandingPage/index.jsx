/* eslint-disable no-unused-vars */
import styles from "./css/main.module.css";
export default function LandingPage() {
  return (
    <>
      <div id={styles.pageLanding}>
        <div id={styles.container}>
          <header>
            <img className={styles.animateup}
              id={styles.logo}
              src="/images/shoppingcart_77968.svg"
              alt="logomarca de Meu Mercado"
            />

            <div className={`${styles.title} ${styles.animateup}`}>
              <strong>Meu Mercado</strong>
              <p>Monte a sua lista de compras</p>
            </div>
          </header>

          <main>
            <h1 className={styles.animateup}>Bem-vindo ao Meu Mercado!</h1>

            <section className={styles.adding}>
              <p className={styles.animateup}>Adicione um item abaixo e clique na seta</p>

              <a href="#" title="Adicionar item" className={styles.animateup}>
                <img
                  src="/images/pngwing.com.png"
                  alt="imagem da seta 'adicionar item'"
                />
              </a>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
