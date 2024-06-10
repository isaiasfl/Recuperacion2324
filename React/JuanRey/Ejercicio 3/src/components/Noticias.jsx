const Noticias = ({primera, segunda, tercera}) => {
    
        return (
        <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', margin: '10px' }}>
        <div style={{ backgroundColor: '#61dafbaa', padding: '40px', textAlign: 'center' }}>
            <h3>{primera.titulo}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <p style={{ margin: '0' }}>{primera.texto}</p>
            </div>
        </div>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
        <div style={{ backgroundColor: '#61dafbaa', padding: '40px', textAlign: 'center' }}>
            <h3>{segunda.titulo}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <p style={{ margin: '0' }}>{segunda.texto}</p>
            </div>
        </div>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
        <div style={{ backgroundColor: '#61dafbaa', padding: '40px', textAlign: 'center' }}>
            <h3>{tercera.titulo}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <p style={{ margin: '0' }}>{tercera.texto}</p>
            </div>
        </div>
        </div>
    </div>
        
        )
    }

export default Noticias