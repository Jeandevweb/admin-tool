import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

const GenericDrawer = ({
  children,
  isOpen,
  placement,
  onClose,
  text,
  sx,
  drawerCloseButton,
}) => {
  return (
    <Drawer isOpen={isOpen} padding="0" placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        {drawerCloseButton}
        <DrawerHeader sx={sx}>{text}</DrawerHeader>
        <Divider borderColor="gray.300" />
        <DrawerBody padding="0 7px" marginBottom="20px">
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default GenericDrawer;
