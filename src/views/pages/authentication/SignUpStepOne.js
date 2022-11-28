import React from "react"
import { Link } from "react-router-dom"

import {
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Spinner,
  FormFeedback
} from "reactstrap"
import { Controller } from "react-hook-form"
// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { Check } from "react-feather"


const SignUpStepOne = ({onSubmit, control, errors}) => {

  // const history = useHistory()
  // const dispatch = useDispatch()

  //   const illustration =
  //       skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
  //     source = require(`@src/assets/images/pages/${illustration}`).default;

  return (

      <Form
        className="auth-register-form mt-2"
        onSubmit={onSubmit}
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
        <Button type="submit" block color="primary">
          <span className="ms-50">Continue</span>
        </Button>

        <p className="text-center mt-2">
          <span className="me-25">Already have an account?</span>
          <Link to="/login">
            <span>Sign in instead</span>
          </Link>
        </p>
      </Form>
  )
}

export default SignUpStepOne
