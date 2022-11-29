// ** React Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";
// import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import { useForm } from "react-hook-form";
// import Select from 'react-select'

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Label,
  Button,
  Form,
  Input,
  FormFeedback,
  Spinner,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

// ** Images
import Logo from "@src/assets/images/logo/logo.png";

import CreateAppExample from "../modal-examples/CreateApp";
import SignUpStepOne from "./SignUpStepOne";
import { jwt } from "../../../@core/auth/jwt/useJwt";

const defaultValues = {
  email: "",
};

const Register = () => {
  // eslint-disable-next-line prefer-const
  let [count, setCount] = useState(1);
  const [notification, setNotification] = useState({
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { skin } = useSkin();
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const illustration =
      skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const onSubmit = (data) => {
    const tempData = { ...data };
    setLoading(true);
    if (Object.values(tempData).every((field) => Boolean(field))) {
      const { email } = data;
      jwt
        .register({ email })
        .then((res) => {
          if (res.data.error) {
            setLoading(false);
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) {
                setError(property, {
                  type: "manual",
                  message: res.data.error[property],
                });
              }
            }
          } else {
            if (Boolean(res.data.ResponseInfo)) {
              setLoading(false);
              setCount(2);
              setNotification({ message: res.data.ResponseInfo.Message });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
            message: `Please enter a valid ${key}`,
          });
        }
        if (key === "terms" && data.terms === false) {
          setError("terms", {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link
          className="brand-logo d-flex align-items-center"
          to="/"
          onClick={(e) => e.preventDefault()}
        >
          <img src={Logo} width="30" />
          <h2 className="brand-text text-primary ms-1">Hoptool</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="7" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="5"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2">
              Make your app management easy and fun!
            </CardText>
            {count === 1 && (
              <SignUpStepOne
                onSubmit={handleSubmit(onSubmit)}
                control={control}
                errors={errors}
                loading={loading}
              />
            )}
            {count === 2 && <CreateAppExample message={notification.message} />}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
