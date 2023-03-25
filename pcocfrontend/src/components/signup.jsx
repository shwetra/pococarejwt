import axios from 'axios';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setformDate]=useState({});
  const nav=useNavigate()

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setformDate({
      ...formData,
      [name]:value,
    });

  };
    const handlelogin=async(e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:8000/signup",formData).then((res)=>{
            console.log(res)
            alert(`${res.data.msg}`)
            nav("/login")
        }).catch((err)=>{
            console.log(err)
        })
       
    }

    
  return (
    <div>
<Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Stack align={"center"}>
            <h1>Sign-up</h1>
            </Stack>

            <FormControl id="email" isRequired>
              <Input
                fontSize={"md"}
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="Email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  name="password"
                  onChange={handleChange}
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={handlelogin}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                have an account? <Link to="/login" ><Text color={"blue.400"}> Login In</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </div>
  )
}

export default Signup