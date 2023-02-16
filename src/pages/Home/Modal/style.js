import styled from "styled-components";

export const ModalSection = styled.section`
  .modalBox {
    background: rgba(18, 18, 20, 0.5);

    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
  }

  width: 369px;
  height: 342px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-gray-3);
  /* border: 1px solid var(--color-gray-0); */

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  /* padding: 68px 22px 32px; */
  gap: 20px;

  margin: 25vh auto;

  .divTitle {
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    background-color: var(--color-gray-2);
    border-radius: 4px 4px 0px 0px;

    padding: 12px 20px;
    gap: 10px;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 24px;

      color: var(--color-gray-0);
    }

    i {
      font-size: 1.25rem;
      color: var(--color-gray-0);
      cursor: pointer;
    }

    .teste {
      display: flex;
    }
  }
`;

export const ModalSectionTrash = styled.section``;

export const FormEditTech = styled.form`
  width: 100%;
  max-width: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0px;

  color: var(--color-primary);

  gap: 20px;

  input {
    width: 100%;
    height: 39px;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 21px;

    color: var(--color-gray-1);

    background: var(--color-gray-2);
    border: none;
    border-radius: 4px;

    padding: 0px 14px;
    gap: 9px;
  }

  input:focus {
    color: var(--color-gray-0);
  }

  select {
    width: 100%;
    height: 39px;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 21px;

    color: var(--color-gray-1);

    background: var(--color-gray-2);
    border: none;
    border-radius: 4px;

    padding: 0px 14px;
    gap: 9px;
  }

  label {
    color: var(--color-gray-1);
  }

  a {
    box-sizing: border-box;

    width: 100%;
    height: 39px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 26px;
    color: var(--color-gray-0);

    padding: 0px 22px;
    gap: 10px;

    background: var(--color-primary);

    border: 1px solid var(--color-primary);
    border-radius: 4px;

    :hover {
      background: var(--color-primary-Focus);

      border: 1px solid var(--color-primary-Focus);
    }

    :not {
      background: var(--color-primary-Negative);

      border: 1px solid var(--color-primary-Negative);
    }

    :disabled {
      background-color: var(--color-gray-1);

      border: 1px solid var(--color-gray-1);
    }
    :disabled:hover {
      background: var(--color-gray-2);

      border: 1px solid var(--color-gray-2);
    }
  }
`;
