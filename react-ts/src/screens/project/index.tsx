import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { KanbanScreen } from "../kanban";
import { EpicScreen } from "../epic";

export const ProjectScreen = () => {
  //   return <h1>ProjectScreen</h1>;
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        {/*projects/:projectId/kanban*/}
        <Route path={"/kanban"} element={<KanbanScreen />} />
        {/*projects/:projectId/epic*/}
        <Route path={"/epic"} element={<EpicScreen />} />
        <Navigate to={window.location.pathname + "/kanban"} />
      </Routes>
    </div>
  );
};
