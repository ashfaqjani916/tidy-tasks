// HoldTight.tsx
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`

const Message = styled.div`
  margin-top: 20px;
  animation: ${bounce} 2s infinite;
`

const Icon = styled(AiOutlineLoading3Quarters)`
  font-size: 50px;
  animation: ${spin} 2s infinite linear;
  color: #333;
`

const HoldTight: React.FC = () => {
  return (
    <Container>
      <Icon />
      <Message>Hold tight, we are working on it.</Message>
    </Container>
  )
}

export default HoldTight
