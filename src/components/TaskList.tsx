import NextImage from "next/image";
import { styled } from "styled-components";
import UploadButton from "./UploadButton";
import TaskListItem from "./TaskListItem";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const TopWrapper = styled.div`
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
`;
const CenterWrapper = styled.div`
  padding-left: 8px;
  padding-right: 4px;
  margin-right: 4px;
  overflow-y: auto;
  flex: 1 1 0;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.7);
  }

  &::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-resizer {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const BottomWrapper = styled.div`
  height: 40px;
  flex: 0 0 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
`;
const ListItem = styled.div`
  width: 100%;
  height: 48px;
  // border: 1px solid #5113ff;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
`;

const HR = styled.hr`
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

interface Props {
  files: any[];
}
const TaskList = ({ files }: Props) => {
  return (
    <Base>
      <TopWrapper>
        <UploadButton onUpload={() => null} />
      </TopWrapper>
      <HR />
      <CenterWrapper>
        <ListWrapper>
          <TaskListItem />
        </ListWrapper>
      </CenterWrapper>
      {/* <HR /> */}

      <BottomWrapper></BottomWrapper>
    </Base>
  );
};

export default TaskList;
