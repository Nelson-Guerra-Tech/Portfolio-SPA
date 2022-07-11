import React from 'react';
import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          Made with ♥️ by Nelson Guerra © built with
          <FaReact size='30' className='inline ml-2 text-[#61dbfb] rotate' />
        </p>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #0c0e07;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
