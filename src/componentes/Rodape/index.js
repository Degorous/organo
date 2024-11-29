import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <img className='fundo' src="/imagens/fundo.png" alt="Imagem de fundo" />
      <div className="redes-sociais">
        <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
          <img src="/imagens/fb.png" alt="Logo do Facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
        <img src="/imagens/tw.png" alt="Logo do Twitter" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel='noreferrer'>
        <img src="/imagens/ig.png" alt="Logo do GitHub" />
        </a>
      </div>
      <div className="logo-alura">
        <img src="/imagens/logo.png" alt="Logo da Alura" />
      </div>
      <div className="desenvolvido-por">
        <h4>Desenvolvido por Erick Palombo</h4>
      </div>
    </footer>
  )
}

export default Rodape