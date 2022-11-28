import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Progress,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormFeedback,
  Label,
  Input
} from "reactstrap"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import { User, Check, X } from "react-feather"
import { useForm, Controller } from "react-hook-form"

// ** Utils

// ** Styles
import AddPaymentSidebar from "../../apps/invoice/shared-sidebar/SidebarAddPayment"
import KnowledgeBaseHeader from "../../pages/knowledge-base/KnowledgeBaseHeader"

import "@styles/base/pages/page-knowledge-base.scss" 
import ModalAdd from "../../apps/invoice/shared-sidebar/ModalAdd"

const defaultValues = {
  firstName: "Bob",
  lastName: "GetBucks Limited",
  username: "bob.dev"
}
const statusOptions = [
  { value: "active", label: "Sole-proprietor" },
  { value: "inactive", label: "Private Limited Company" },
  { value: "suspended", label: "Public Limited Company" }
]

const OverView = () => {
  const [addPaymentOpen, setAddPaymentOpen] = useState(false)
  const toggleAddSidebar = () => setAddPaymentOpen(!addPaymentOpen)

  const [searchTerm, setSearchTerm] = useState("")
  const [show, setShow] = useState(false)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual"
          })
        }
      }
    }
  }

  return (
    <div>
      <h1 style={{ marginBottom: "30px" }} className="my-10">
        Hello, GetBucks Limited
      </h1>
      <Card className="card-statistics ">
        <CardHeader style={{ paddingTop: "20px", paddingBottom: "0" }}>
          <CardTitle tag="h1">SetUp Progress</CardTitle>
          <Col md="6" sm="12" className="d-flex align-items-center">
            <Progress
              className="avg-session-progress progress-bar-success w-100 mb-0"
              value="50"
            />
            <p style={{marginLeft: "1rem"}} className="mb-0">50%</p>
          </Col>
        </CardHeader>
        <hr />
        <CardBody className="statistics-body">
          {/* <Row>
            <Col md="6" lg="4" sm="12">
              <Card className="card-congratulations-medal">
                <CardBody>
                  <h4 style={{fontWeight: "600"}} >Upgrade Compliance</h4>
                  <CardText className="font-small-3 ">
                    Take your business live to start
                    <br /> connecting to accounts
                  </CardText>
                  <Button onClick={() => setShow(true)} color="primary"
                  className="upgrade-btn">
                    Upgrade
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" lg="4" sm="12">
              <Card className="card-congratulations-medal">
                <CardBody>
                  <h4 style={{fontWeight: "600"}} className="">Add services</h4>
                  <CardText className="font-small-3 ">
                    Create an App to get your
                    <br /> API keys, start collecting data
                  </CardText>
                  <Button
                    onClick={() => setAddPaymentOpen(true)}
                    color="primary"
                  >
                    Add Service
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" lg="4" sm="12">
              <Card className="card-congratulations-medal">
                <CardBody>
                  <h4 style={{ fontWeight: "600" }} >
                    Transaction Volume
                  </h4>
                  <CardText
                    style={{ marginTop: "15px", marginBottom: "25px" }}
                    className="font-small-13 fs-1 my-10 fw-bold"
                  >
                    ₦0.00
                  </CardText>
                  <Button color="primary">Fund Wallet</Button>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </CardBody>
        <ModalAdd
          toggleSidebar={toggleAddSidebar}
          open={addPaymentOpen}
        />
        <Modal
          isOpen={show}
          toggle={() => setShow(!show)}
          className="modal-dialog-centered modal-lg"
        >
          <ModalHeader
            className="bg-transparent"
            toggle={() => setShow(!show)}
          ></ModalHeader>
          <ModalBody className="px-sm-5 mx-50 pb-5">
            <div className="text-center mb-2">
              <h1 className="mb-1">Update your KYC details</h1>
              <p>Updating user details will receive a privacy audit.</p>
            </div>
            <Row
              tag="form"
              className="gy-1 pt-75"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Col md="12" sm="12">
                <Label className="form-label" for="inputFile">
                  Incorporation Document
                </Label>
                <Input type="file" id="inputFile" name="fileInput" />
              </Col>
              <Col md="12" sm="12">
                <Label className="form-label" for="inputFile">
                  Prooof of Address
                </Label>
                <Input type="file" id="inputFile" name="fileInput" />
              </Col>
              <Col md="12" sm="12">
                <Label className="form-label" for="inputFile">
                  Licence from regulatory body
                </Label>
                <Input type="file" id="inputFile" name="fileInput" />
              </Col>
              <Col md="12" sm="12">
                <Label className="form-label" for="inputFile">
                  Service level of agreement
                </Label>
                <Input type="file" id="inputFile" name="fileInput" />
              </Col>
              <Col md={6} xs={12}>
                <Label className="form-label" for="status">
                  Business Class:
                </Label>
                <Select
                  id="status"
                  isClearable={false}
                  className="react-select"
                  classNamePrefix="select"
                  options={statusOptions}
                  theme={selectThemeColors}
                  defaultValue={statusOptions[0]}
                />
              </Col>
              <Col md="6" xs="12">
                <Label className="form-label" for="lastName">
                  Company name
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="lastName"
                      placeholder="Doe"
                      invalid={errors.lastName && true}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>Please enter a valid Last Name</FormFeedback>
                )}
              </Col>

              <Col xs={12}>
                <div className="d-flex align-items-center">
                  <div className="form-switch">
                    <Input
                      type="switch"
                      defaultChecked
                      id="billing-switch"
                      name="billing-switch"
                    />
                    <Label
                      className="form-check-label"
                      htmlFor="billing-switch"
                    >
                      <span className="switch-icon-left">
                        <Check size={14} />
                      </span>
                      <span className="switch-icon-right">
                        <X size={14} />
                      </span>
                    </Label>
                  </div>
                  <Label
                    className="form-check-label fw-bolder"
                    htmlFor="billing-switch"
                  >
                    I Agree that the files uploaded is valid
                  </Label>
                </div>
              </Col>
              <Col xs={12} className="text-center mt-2 pt-50">
                <Button type="submit" className="me-1" color="primary">
                  Submit
                </Button>
                <Button
                  type="reset"
                  color="secondary"
                  outline
                  onClick={() => setShow(false)}
                >
                  Discard
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Card>
      <div>
        <KnowledgeBaseHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  )
}

export default OverView
