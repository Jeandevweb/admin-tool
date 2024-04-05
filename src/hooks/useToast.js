import { useToast } from "@chakra-ui/react";

export const UseToast = () => {
  const toast = useToast();
  const Toast = (title, position, status, duration) => {
    return toast({
      title: title,
      position: position,
      status: status,
      duration: duration,
      isClosable: true,
    });
  };

  return {
    Toast,
  };
};
