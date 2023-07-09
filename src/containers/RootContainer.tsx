"use client";
import React from "react";

import { styled } from "styled-components";
import TaskList from "../components/TaskList";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Paper = styled.div`
  display: flex;
  align-items: center;
  width: 832px;
  height: 532px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  gap: 16px;
`;

const MockCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 532px;
  height: 100%;
  background: #1d1d1d;
  border-radius: 6px;
`;
const Canvas = styled.div`
  width: 512px;
  height: 512px;
  background: #eee
    url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill-opacity=".16" >\
            <rect x="16" width="16" height="16" />\
            <rect y="16" width="16" height="16" />\
        </svg>');

  background-size: 16px 16px;
`;
const ListWrapper = styled.div`
  flex: 1;
  height: 100%;
  background: #1d1d1d;
  border-radius: 6px;
  overflow: hidden;
`;

const RootContainer = () => {
  return (
    <Base>
      <Paper>
        <MockCanvas>
          <Canvas></Canvas>
        </MockCanvas>
        <ListWrapper>
          <TaskList />
        </ListWrapper>
      </Paper>
    </Base>
  );
};

export default RootContainer;
