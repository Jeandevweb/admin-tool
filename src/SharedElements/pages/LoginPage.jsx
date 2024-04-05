import { useState } from "react";
import { useTranslate } from "@tolgee/react";
import { SmoothComponent } from "SharedElements/components/AnimationComponent.jsx";

import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Flex, Box, Stack, Heading, Checkbox, Button } from "@chakra-ui/react";

import { FreeLogo } from "assets/Icons";

function LoginPage() {
  const { t } = useTranslate();

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Box backgroundImage="linear-gradient(to right top, #ebf0f4, #e7eef3, #e3ebf3, #dfe9f2, #dce6f2, #dae4f2, #d7e3f2, #d5e1f2, #d3dff2, #d2def2, #d1dcf2, #d0daf2)">
        <SmoothComponent>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            backgroundImage={`url("assets/bg_freeboxos.svg")`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignContent="center"
          >
            <Stack
              position="relative"
              borderRadius="16px"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              backdropFilter="auto"
              backdropBlur="100px"
              border="1px solid rgba(255, 255, 255, 0.3)"
              spacing={10}
              maxW={"lg"}
              padding="20px 15px"
              height="600px"
              backgroundImage="linear-gradient(to left top, #fdfdfd, #fefefe, #fefefe, #ffffff, #ffffff)"
            >
              <FreeLogo
                textAlign="center"
                margin="10px auto"
                height="30px"
                width="110px"
                color="red"
              />
              <Box>
                <Heading textAlign="center" fontSize={"4xl"} height="70px">
                  Odyssee {t("administration").toLowerCase()}
                </Heading>
              </Box>
              <Box spacing={5} w="450px">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email(t("invalid_email"))
                      .required(t("plugin.required")),
                    password: Yup.string().required(t("plugin.required")),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                  }}
                >
                  <Form style={formStyle}>
                    {/* email */}
                    <label htmlFor="email">{t("email")} </label>
                    <Field style={fieldStyle} name="email" />
                    <Box color="red" fontWeight="bold">
                      <ErrorMessage name="email" />
                    </Box>
                    {/* password */}
                    <label htmlFor="password">{t("userCheck.password")} </label>
                    <Field
                      style={fieldStyle}
                      name="password"
                      autoComplete="off"
                      type={isChecked ? "text" : "password"}
                    />
                    <Box color="red" fontWeight="bold">
                      <ErrorMessage name="password" />
                    </Box>
                    <Checkbox
                      isChecked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    >
                      {t("show_password")}
                    </Checkbox>
                    <Button marginTop="15px" colorScheme="red" type="submit">
                      {t("userCheck.submit")}
                    </Button>
                  </Form>
                </Formik>
              </Box>
            </Stack>
          </Flex>
        </SmoothComponent>
      </Box>
    </>
  );
}

export default LoginPage;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 17,
  margin: "0 35px 35px",
};

const fieldStyle = {
  border: "1px solid lightgray",
  borderRadius: "5px",
  padding: "5px",
  width: "100%",
};
