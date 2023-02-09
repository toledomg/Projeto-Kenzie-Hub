import styled from "styled-components";

export const Nav = styled.nav`
  /* border-bottom: 1px solid var(--color-gray-3); */

  div {
    font-family: var(--font-primary);

    max-width: 1200px;
    min-width: 320px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    padding: 20px;
    gap: 1rem;
  }

  div > h1 {
    color: var(--color-primary);
  }

  div > a {
    box-sizing: border-box;

    width: 56px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--color-gray-0);

    padding: 0px 17px;
    gap: 10px;

    background: var(--color-gray-3);

    border: 1px solid var(--color-gray-3);
    border-radius: 4px;

    :hover {
      background: var(--color-gray-2);

      border: 1px solid var(--color-gray-2);
    }
  }
`;

export const Section = styled.section`
  div {
    max-width: 1200px;
    min-width: 320px;
    height: auto;
    min-height: 131px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid var(--color-gray-3);
    margin: 0 auto;

    padding: 36px 20px;
    gap: 30px;
  }

  div > h1 {
    color: var(--color-gray-0);
  }

  div > p {
    color: var(--color-gray-1);
  }

  @media screen and (min-width: 769px) and (max-width: 4044px) {
  }
`;

export const SectionInfo = styled.section`
  div {
    max-width: 1200px;
    min-width: 320px;
    height: auto;
    min-height: 131px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    padding: 36px 20px;
    gap: 30px;
  }

  div > h1 {
    color: var(--color-gray-0);
  }

  div > p {
    color: var(--color-gray-1);
  }

  @media screen and (min-width: 769px) and (max-width: 4044px) {
  }
`;
