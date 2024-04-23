const NoticiaPrincipal = ({titulo, texto, imagen}) => {

  return (
    <div style={{ backgroundColor: '#61dafbaa', padding: '20px', textAlign: 'center' }}>
      <h1>{titulo}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <img src={imagen} alt="Imagen" style={{ width: '25%', marginRight: '20px' }} />
        <p style={{ margin: '0' }}>{texto}</p>
      </div>
    </div>
  );
}

export default NoticiaPrincipal;