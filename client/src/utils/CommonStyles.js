import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 2.5em;
  color: white;
  font-family: "UntitledSans-Bold", sans-serif;
`;

export const StyledButton = styled.button`
  font-family: "UntitledSans-Medium", sans-serif;
  width: calc(50% - 10px);
  height: 55px;
  border: none;
  border-radius: 8px;
  background: white;

  color: #5746af;
  font-size: 17px;

  &:hover {
    cursor: pointer;
    background-color: #f4f2f5;
    box-shadow: 0 0 0 2px #5746af;
  }
`;

export const CheckboxContainer = styled.div`
  height: 30px;
  background: rgba(196, 196, 196, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  background: rgba(196, 196, 196, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: "UntitledSans-Regular", sans-serif;
  color: white;
  font-size: 15px;
  line-height: 1;
`;

export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: white;
  &:hover {
    font-family: "UntitledSans-Medium", sans-serif;
    cursor: pointer;
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
  }
`;
