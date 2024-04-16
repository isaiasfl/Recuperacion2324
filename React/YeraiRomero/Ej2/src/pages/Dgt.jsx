import AltaForm from '../components/AltaForm';
import AltasView from '../components/AltasView';
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