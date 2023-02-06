import styled from "styled-components";

export const FormCreate = styled.form`
  width: 100%;
  max-width: 260px;

  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  font-size: 9.772px;
  line-height: 0px;

  color: var(--color-gray-1);

  gap: 15px;

  input {
    width: 265px;
    height: 39px;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;

    color: var(--color-gray-1);

    background: var(--color-gray-2);
    border: 1px solid var(--color-gray-0);
    border-radius: 4px;

    padding: 0px 14px;
    gap: 9px;
  }

  input:focus {
    color: var(--color-gray-0);
  }
`;
