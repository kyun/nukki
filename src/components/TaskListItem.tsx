import { styled } from "styled-components";
import NextImage from "next/image";
import IconCheck from "./icons/IconCheck";

const Base = styled.div`
  width: 100%;
  height: 48px;
  // border: 1px solid #5113ff;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  overflow: hidden;
  //   border: 1px solid #444;
`;

const ThumbnailWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TaskInfoWrapper = styled.div`
  height: 100%;
  flex: 1 1 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const FileName = styled.p`
  font-size: 13px;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const FileSize = styled.p`
  font-size: 10px;
  color: #eee;
  margin: 0;
  padding: 0;
`;

const TaskStatusWrapper = styled.div`
  flex: 0 0 32px;
  height: 100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingAnimation = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #5113ff;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  transform-origin: center center;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ProcessingSeconds = styled.p`
  font-size: 10px;
  color: #eee;
`;

const TaskListItem = () => {
  return (
    <Base>
      <ThumbnailWrapper>
        <NextImage
          width={48}
          height={48}
          alt="thumbnail"
          loader={({ src }) => src}
          // src="https://via.placeholder.com/48"
          // free placeholder image

          src="https://source.unsplash.com/random/48x48"
        />
      </ThumbnailWrapper>
      <TaskInfoWrapper>
        <FileName>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          eius nulla quas enim atque ipsa aliquam tempore dolores molestiae
          pariatur soluta a cupiditate, vero distinctio animi amet sapiente rem.
        </FileName>
        <FileSize>60.00 KB</FileSize>
      </TaskInfoWrapper>
      <TaskStatusWrapper>
        {/* loading circe unicode */}
        {/* <LoadingAnimation></LoadingAnimation> */}
        <IconCheck />
        <ProcessingSeconds>10.0s</ProcessingSeconds>
      </TaskStatusWrapper>
    </Base>
  );
};
export default TaskListItem;
