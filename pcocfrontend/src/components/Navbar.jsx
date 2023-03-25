import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Flex bg="black" justify="center" gap="5rem" p="1rem" position="sticky" top="0" zIndex="1">
        <img width="90px" src="https://www.pococare.com/image.png" alt="" />
        <NavLink to="/"><Button fontSize="1.5rem" p='1.5rem' colorScheme="blue">Home</Button></NavLink>
        <NavLink to="/login"><Button fontSize="1.5rem" p='1.5rem' colorScheme="blue">Login</Button></NavLink>
        <NavLink to="/signup"><Button fontSize="1.5rem" p='1.5rem' colorScheme="blue">Sign-up</Button></NavLink>
    </Flex>
  )
}