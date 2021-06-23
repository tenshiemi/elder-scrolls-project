import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const LoaderKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Loader = styled.div`
  & {
    animation: ${LoaderKeyframes};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoaderFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: center;
  width: 100%;
`