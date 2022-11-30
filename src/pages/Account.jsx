import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button, Center, HStack, Text } from "@chakra-ui/react";

const Account = () => {
  const { user } = useAuthContext();
  const { logout, error, isloading } = useLogout();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Center mt={"100"}>
      <HStack spacing={8}>
        <Text>sign in email: {user && user.email} </Text>
        <Button
          onClick={handleLogout}
          colorScheme="teal"
        >
          Log out
        </Button>
      </HStack>
    </Center>
  );
};
export default Account;
