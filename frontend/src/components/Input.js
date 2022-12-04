import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: #FFFFFF;
  box-shadow: 0 px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
