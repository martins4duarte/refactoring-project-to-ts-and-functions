import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;

  p {
    font-family: sans-serif;
    font-weight: bold;
  }

  button {
    position: relative;
    padding: 20px 30px 20px 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    font-weight: bold;

    :hover {
      transform: translateY(-5px);
      transition: all 0.3s;    
    }
  }

  .remove {
    background-color: #c72828;
    color: #FFF;
  }

  .cancel {
    background-color: #FFFFFF;
    transition: 0.8s;
  }
`;
