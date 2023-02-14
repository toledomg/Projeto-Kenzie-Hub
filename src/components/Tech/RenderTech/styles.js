import styled from "styled-components";

export const TechUl = styled.ul`
  width: 100%;
  max-width: 1000px;
  height: 420px;

  display: flex;
  flex-direction: column;

  background-color: var(--color-gray-3);
  border-radius: 8px;

  margin: 0 auto;
  padding: 15px 15px;
  gap: 16px;

  li {
    width: 100%;
    height: 49px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-gray-4);
    border-radius: 4px;

    padding: 10px 20px;
  }

  li:hover {
    background-color: var(--color-gray-2);
  }

  li > p {
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: var(--color-gray-0);
  }

  li > section {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 16px;
  }

  li > section > i {
    font-size: 14px;
    color: var(--color-gray-0);

    cursor: pointer;
  }

  li > section > p {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    color: var(--color-gray-0);

    text-align: right;
  }
`;
