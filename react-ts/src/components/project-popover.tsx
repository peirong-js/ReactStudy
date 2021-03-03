import styled from "@emotion/styled";
import { Popover, Typography, List, Divider, Button } from "antd";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "./lib";

export const ProjectPopover = () => {
  const { data: projects, isLoading } = useProjects();
  const pinnedProjects = projects?.filter((project) => project.pin);
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((item) => {
          return (
            <List.Item key={item.id}>
              <List.Item.Meta title={item.name}></List.Item.Meta>
            </List.Item>
          );
        })}
      </List>
      <Divider />
      <ButtonNoPadding type={"link"}>创建项目</ButtonNoPadding>
    </ContentContainer>
  );

  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
