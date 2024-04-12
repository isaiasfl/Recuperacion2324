const AltaCard = ({ num, tipo, matricula, color, fechaAlta }) => {

  let cardClass = tipo === 'coche' ? 'card coche' : tipo === 'moto' ? 'card moto' : 'card camion';
  let spelling = tipo === 'camion' ? 'camión' : tipo;
  return (
    <div className={cardClass}>
      <h3>{num} ({spelling})</h3>
      <p>Matrícula: {matricula}</p>
      <p>Color: {color}</p>
      <p>Fecha de alta: {fechaAlta}</p>
    </div>
  );
}
export default AltaCard;