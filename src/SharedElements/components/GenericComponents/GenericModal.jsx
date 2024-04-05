import { useTranslate } from "@tolgee/react";

import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const GenericModal = ({ title, children }) => {
  const { t } = useTranslate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        colorScheme={"blue"}
        fontSize={{
          base: "small",
          sm: "small",
          md: "small",
          xl: "medium",
        }}
      >
        {t("edit")}
        {title}
      </Button>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent m="50px 0 0" overflow="hidden">
          <Flex
            width="100%"
            alignItems="center"
            justify="space-between"
            marginTop="10px"
            padding="0 10px"
          >
            <ModalHeader whiteSpace="nowrap">{title}</ModalHeader>
            <Button colorScheme="blue" mr={4} onClick={onClose} variant="ghost">
              {t("close")}
            </Button>
          </Flex>
          <ModalBody>{children}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GenericModal;
