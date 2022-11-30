import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

import {
  Heading,
  Flex,
  Input,
  Button,
  Text,
  Center,
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);

    console.log(error);
  };
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Flex
        height="90vh"
        alignItems="center"
        justifyContent="center"
        direction={"column"}
      >
        <Heading fontSize={48} mb={12} fontWeight={100}>
          Spacepolytech.
        </Heading>

        <Flex
          direction="column"
          background="gray.100"
          py={28}
          px={32}
          rounded={6}
        >
          <Heading mb={12}>Sign up</Heading>

          <FormControl>
            <Input
              placeholder="thiernodiop@esp.sn"
              variant="filled"
              mb={3}
              type="email"
              id="email"
              width="sm"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </FormControl>

          <FormControl isInvalid={error}>
            <Input
              placeholder="*****"
              variant="filled"
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Button colorScheme="teal" type="submit" w={"full"} mt={6}>
              Sign up
            </Button>
          </FormControl>

          {/* <Button mt={4} border="1px" borderColor={"gray.500"}>
            Sign in with Google
          </Button> */}
          <Center mt={"2"}>
            <Text fontSize={"sm"}>
              already signed up?{" "}
              <Link color={"teal"} href="/">
                Log in
              </Link>
            </Text>
          </Center>
        </Flex>
      </Flex>
    </form>
  );
};
export default Signup;
