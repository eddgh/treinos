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
              src="https://img1.gratispng.com/20171220/tlw/shopping-cart-png-5a3a8fbe95a559.989579421513787326613.jpg"
              height="90"
              alt="logomarca de Happy"
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
                  src="./public/images/pngwing.com.png"
                  height="20"
                  alt="imagem da seta 'dicionar item'"
                />
              </a>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
