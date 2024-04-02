import InfoTareas from "../components/InfoTareas";
import ShowTareas from "../components/ShowTareas";
import TareasForm from "../components/TareasForm";

const HomePage = () => {
  return (
    <div className="flex flex-row p-2 m-1">
      <div className="flex flex-col w-1/2 mx-1 p-1">
        {/* <TareasForm /> */}
        {/* <InfoTareas /> */}
      </div>
      <div className="flex flex-col w-1/2">
        <ShowTareas />
      </div>
    </div>
  );
};

export default HomePage;
