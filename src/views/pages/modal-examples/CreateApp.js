// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  Modal,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
} from "reactstrap";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Icons Imports
import { Book, Package, Command, CreditCard, Check } from "react-feather";

// ** Steps
import SubmitStep from "./create-app-steps/SubmitStep";
import DetailsStep from "./create-app-steps/DetailsStep";
import BillingStep from "./create-app-steps/BillingStep";
import DatabaseStep from "./create-app-steps/DatabaseStep";
import FrameworkStep from "./create-app-steps/FrameworkStep";

import success from "@src/assets/images/illustration/success.svg";
// ** Styles
import "@styles/react/pages/modal-create-app.scss";
import { useHistory } from "react-router-dom";

const CreateAppExample = ({ message }) => {
  // ** Ref
  // const ref = useRef(null)
  const history = useHistory("");
  // ** States
  const [show, setShow] = useState(true);
  // const [stepper, setStepper] = useState(null)

  return (
    <Fragment>
      {/* <Card>
        <CardBody className='text-center'>
          <Package className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Create App</CardTitle>
          <CardText>Provide application data with this form modal popup example, easy to use in any page.</CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card> */}
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="pb-3 px-sm-3">
          {/* <video loop={true} autoplay={true} className="d-block mx-auto">
            <source src={success} type="video/mp4" />
          </video> */}
          <img src={success} className="mb-3 w-100" alt="" />
          <h1 className="text-center mb-1">You are done!</h1>
          <p className="text-center mb-2">
            {message + " please check your email" ||
              "Your Request for business activation was successful!"}
          </p>
          <Button
            type="button"
            block
            color="primary"
            onClick={() => history.replace("/")}
          >
            Proceed to Login
          </Button>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default CreateAppExample;
