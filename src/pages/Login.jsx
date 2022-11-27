import { Box, Heading, Flex, Input, Button, Text, Center } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box>
      <Flex
        height="90vh"
        alignItems="center"
        justifyContent="center"
        direction={"column"}
      >
        <Heading fontSize={48} mb={12}>
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
          <Input
            placeholder="thiernodiop@esp.sn"
            variant="filled"
            mb={3}
            type="email"
            width="sm"
          />
          <Input placeholder="*****" variant="filled" mb={6} type="password" />
          <Button colorScheme="teal"> Log in</Button>
          <Button mt={4} border="1px" borderColor={"grey"}>Sign in with Google</Button>
          <Center mt={"2"}><Text fontSize={"sm"}>Don't have an account? Sign up</Text></Center>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Login;
