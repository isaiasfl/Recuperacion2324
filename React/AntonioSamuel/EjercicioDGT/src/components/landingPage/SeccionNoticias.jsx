import Noticia from "./Noticia"

const SeccionNoticias = (props) => {
  const { noticias } = props

  const sacarNoticiasAleatorias = () => {
    const noticiasAleatorias = [...noticias];
    noticiasAleatorias.sort(() => Math.random() - 0.5);
    return noticiasAleatorias.slice(0, 3);
  }

  const noticiaAleatorias = sacarNoticiasAleatorias();

  return (
    <div className='border border-black m-2 p-2 flex flex-row justify-center items-center'>
      {
        noticiaAleatorias && noticiaAleatorias.map((noticia)=> <Noticia key={noticia.idNoticia} noticia={noticia}/>)
      }
    </div>
  )
}

export default SeccionNoticias
