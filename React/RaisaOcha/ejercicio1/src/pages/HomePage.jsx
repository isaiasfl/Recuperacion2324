// import Header from "../components/Header";
import TaskPage from "./TaskPage";

const HomePage = () => {

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-8">Priority Tasks</h1>
        <TaskPage />
      </div>
    </>
  );
};

export default HomePage;