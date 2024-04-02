import AltaForm from './AltaForm';
import AltasView from './AltasView';
// a components that contains two other components inside
const Dgt = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AltaForm />
      <AltasView />
    </div >
  );
}
export default Dgt;