import { Form, Formik } from "formik";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useDispatch } from "react-redux";
import { signInUser } from "./authActions";
import { closeModal } from "../../app/common/modals/modalReducer";

export default function LoginForm() {

  const dispatch = useDispatch()

  return (
    <ModalWrapper size="mini" header="Sign in">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, {setSubmitting}) => {
          dispatch(signInUser(values))
          setSubmitting(false)
          dispatch(closeModal())
        }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email address" />
            <MyTextInput
              name="password"
              placeholder="password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
