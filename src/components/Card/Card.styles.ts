import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  max-height: 400px;
  margin: 10px;
  max-width: 245px;
`;

export const Image = styled.img`
  max-height: 100%;
  width: auto;
`;

export const ImageContainer = styled.div`
  border-bottom: 1px solid lightgray;
  max-height: 240px;
  width: auto;
`;

export const Text = styled.p`
  color: darkgray;
  font-size: 12px;
  margin: 4px 0;
  text-align: left;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px 20px;
`;