import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;

  color: var(--color-gray-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  h1 {
    color: var(--color-primary);

    font-size: 30px;
  }

  div {
    width: 296px;
    height: 403px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 18px;
    gap: 18px;

    background-color: var(--color-gray-3);

    border-radius: 4px;
  }

  div > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;

    color: var(--color-gray-0);
  }

  div > span {
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    line-height: 0px;

    color: var(--color-gray-1);
  }

  button {
    width: 100%;
    max-width: 260px;
    height: 39px;

    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 21px;

    padding: 0 10px;
  }
`;
