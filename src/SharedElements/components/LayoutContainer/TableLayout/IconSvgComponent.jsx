import { Box } from "@chakra-ui/react";

const IconSvgComponent = ({ data, fill }) => {
  return (
    <Box
      w="35px"
      fontSize="small"
      margin="0 auto"
      alignItems="center"
      display="flex"
      dangerouslySetInnerHTML={{
        __html: data,
      }}
      fill={fill}
    />
  );
};

export default IconSvgComponent;
