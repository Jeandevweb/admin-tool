import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function GenericButton({
  onClick,
  sx,
  leftIcon,
  variant,
  isDisabled,
  key,
  as,
  status,
  colorScheme,
}) {
  return (
    <Button
      isDisabled={isDisabled}
      onClick={onClick}
      sx={sx}
      leftIcon={leftIcon}
      variant={variant}
      key={key}
      as={as}
      colorScheme={colorScheme}
    >
      {status}
    </Button>
  );
}

GenericButton.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.object,
  variant: PropTypes.string,
  key: PropTypes.string,
};

export default GenericButton;
