const AltasView = () => {
  return (
    <div>
      <h1>Dar de alta un vehículo</h1>
      <form>
        <label>Matrícula</label>
        <input type="text" />
        <label>Marca</label>
        <input type="text" />
        <label>Modelo</label>
        <input type="text" />
        <label>Color</label>
        <input type="text" />
        <label>Tipo</label>
        <datalist id="tipos">
          <option value="coche" />
          <option value="moto" />
          <option value="camión" />
        </datalist>
        <input list="tipos" />
        <label>Fecha de alta</label>
        <input type="date" />
        <button type="submit">Dar de alta</button>
      </form>
    </div>
  );
}
export default AltasView;