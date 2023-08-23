/* eslint-disable no-unused-vars */
import styles from "./css/main.module.css";
export default function LandingPage() {
  return (
    <>
      <div id={styles.pageLanding}>
        <div id={styles.container}>
          <header>
            <img
              id={styles.logo}
              src="/public/images/shoppingcart_77968.svg"
              alt="logomarca de Meu Mercado"
            />

            <div className={styles.title}>
              <strong>Meu Mercado</strong>
              <p>Monte a sua lista de compras</p>
            </div>
          </header>

          <main>
            <h1>Bem-vindo ao Meu Mercado!</h1>

            <section className={styles.adding}>
              <p>Adicione um item abaixo e clique na seta</p>

              <a href="#" title="Adicionar item">
                <img
                  src="/public/images/pngwing.com.png"
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
