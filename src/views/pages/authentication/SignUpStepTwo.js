import React from "react"
import { Link } from "react-router-dom"

// import { useForm, Controller } from "react-hook-form";
// import Select from "react-select";
import {
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Col,
  Row,
  Button,
  Spinner
} from "reactstrap"
import { useForm, Controller } from "react-hook-form"
// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { Check } from "react-feather"

const defaultValues = {
  email: "",
    password: ""
}

const SignUpStepTwo = ({ handlePageCount }) => {
  const {
    control,
    // setError,
    // handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  // const history = useHistory()
  // const dispatch = useDispatch()

  //   const illustration =
  //       skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
  //     source = require(`@src/assets/images/pages/${illustration}`).default;
  //   const {
  //     control,
  //     // setError,
  //     // handleSubmit,
  //     formState: { errors },
  //   } = useForm({ defaultValues });
  return (
      <Form
        className="auth-register-form mt-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-1 position-relative">
          <Label className="form-label" for="register-email">
            Work Email
          </Label>
          <Controller
            id="email"
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="john@example.com"
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          {errors.email ? (
            <FormFeedback>{errors.email.message}</FormFeedback>
          ) : null}
          <Check
            style={{ top: "30px", right: "10px" }}
            className="position-absolute"
          />
        </div>
        <Col sm="12" className="mb-1">
          <Label className="form-label" for="input-default">
            One Time Password (OTP)
          </Label>
          <Input type="password" id="input-default" placeholder="*******" />
        </Col>
        <h6 className="my-2">
          A One Time Password has been sent to the provided email
        </h6>
        <div className="form-check mb-1">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="terms"
                type="checkbox"
                checked={field.value}
                invalid={errors.terms && true}
              />
            )}
          />
          <Label className="form-check-label" for="terms">
            I agree to
            <a className="ms-25" href="/" onClick={(e) => e.preventDefault()}>
              privacy policy & terms
            </a>
          </Label>
        </div>
          <Button type="button" block color="primary" onClick={() => handlePageCount()} >
              <span className="ms-50">Continue</span>
          </Button>
      </Form>

  )
}

export default SignUpStepTwo
