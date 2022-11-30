import {
  Heading,
  Flex,
  Input,
  Button,
  Text,
  Center,
  Link,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
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
          <Heading mb={12}>Log in</Heading>

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

          <FormControl>
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
          </FormControl>
          <FormControl>
            <Button colorScheme="teal" type="submit" w={"full"} mt={6}>
              Log in
            </Button>
          </FormControl>

          {/* <Button mt={4} border="1px" borderColor={"gray.500"}>
            Sign in with Google
          </Button> */}
          <Center mt={"2"}>
            <Text fontSize={"sm"}>
              Don't have an account? <Link color={"teal"} href="/signup">Sign up</Link>
            </Text>
          </Center>
        </Flex>
      </Flex>
    </form>
  );
};
export default Login;
