import { Box, Avatar, Text, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTO, FILL_25PARENT, FILL_PARENT } from "../../constants/typography";
import { resetAuth } from "../../redux/auth/auth.actions";

const User = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Box
      w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_25PARENT }}
      padding={10}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Avatar src="https://bit.ly/broken-link" />
      <Text margin={1}>{"Bhavnesh"}</Text>
      <Text>{"Arora"}</Text>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(resetAuth());

          setTimeout(() => {
            navigate("/");
          }, 3000);
          toast({
            title: "Logout Successful",
            description: "Redirecting to Homepage",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }}
        colorScheme={"pink"}
      >
        Logout
      </Button>
    </Box>
  );
};

export default User;
