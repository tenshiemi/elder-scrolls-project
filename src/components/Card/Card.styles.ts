import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F7F7F7;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 10px;
  width: 245px;
`;

export const Image = styled.img`
  height: auto;
  width: 140px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid lightgray;
  display: flex;
  height: 250px;
  justify-content: center;
  width: auto;
`;

export const Text = styled.p`
  color: #F7F7F7;
  font-family: Arial;
  font-size: 12px;
  margin: 2px 0;
  text-align: left;
`;

export const Title = styled.span`
  color: #F7F7F7;
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
`;

export const TextContainer = styled.div`
  background-color: #196DA3;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: clip;
  padding: 16px 20px;
`;