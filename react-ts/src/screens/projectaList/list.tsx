import { User } from "./searchPanel";
import { Table } from "antd";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>名称</th>
    //       <th>负责人</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {list.map((project) => (
    //       <tr key={project.id}>
    //         <td>{project.name}</td>
    //         <td>
    //           {users.find((item) => item.id === project.personId)?.name ||
    //             "未知"}
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <Table
      rowKey={"id"}
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
