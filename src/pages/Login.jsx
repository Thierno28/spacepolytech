import { useState, useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import { useAuthContext } from "../hooks/useAuthContext";
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
  Image,
} from "@chakra-ui/react";
import google from "../assets/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { login, error, isLoading } = useLogin();
  const { googleLogin, errorGoogle, isLoadingGoogle } = useGoogleLogin();

  const handleGoogleLogin = async () => {
    await googleLogin();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

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
              Log in
            </Button>
          </FormControl>

          <Button
            leftIcon={<Image w={4} src={google} />}
            mt={4}
            border="1px"
            borderColor={"gray.500"}
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </Button>
          <Center mt={"2"}>
            <Text fontSize={"sm"}>
              already signed up?{" "}
              <Link color={"teal"} href="/signup">
                Sign up
              </Link>
            </Text>
          </Center>
        </Flex>
      </Flex>
    </form>
  );
};
export default Login;
