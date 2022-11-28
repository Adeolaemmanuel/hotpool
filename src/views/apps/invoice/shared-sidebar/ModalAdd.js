// ** React Imports
import React, {useState} from "react"
import { Link } from "react-router-dom"

// ** Third Party Components
import Flatpickr from "react-flatpickr"

// ** Reactstrap Imports
import { Form, Input, Label, Button, Col, Row, Modal, ModalBody } from "reactstrap"

// ** Custom Components
import Sidebar from "@components/sidebar"
import { User, Check, X } from "react-feather"
import FileUploaderSingle from "../../../forms/form-elements/file-uploader/FileUploaderSingle"

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss"
import "@styles/base/pages/app-invoice.scss"

const ModalAdd = ({ open, toggleSidebar }) => {
    const [selectedClient, setSelectedClient] = useState("")
    const [selectedCardType, setSelectedCardType] = useState("Paypal")

    function handleSelectChange(event) {
      setSelectedClient(event.target.value)
  }
  function handleSelectCard(event) {
    setSelectedCardType(event.target.value) 
  }

  // ** States
  // const [picker, setPicker] = useState(new Date())

  return (
    <Modal
    //   size="lg"
      isOpen={open}
      title="Add Service"
      className="modal-dialog-centered modal-lg"
    //   headerClassName="mb-1"
      contentClassName="p-0"
      toggle={toggleSidebar}
    >
      <ModalBody>
        {/* <div className='mb-1'>
          <Input id='balance' defaultValue='Invoice Balance: 5000.00' disabled />
        </div> */}
        {/* <div className='mb-1'>
          <Label for='amount' className='form-label'>
            Payment Amount
          </Label>
          <Input type='number' id='amount' placeholder='$1000' />
        </div> */}
        {/* <div className='mb-1'>
          <Label for='payment-amount' className='form-label'>
            Payment Date
          </Label>
          <Flatpickr id='payment-amount' value={picker} onChange={date => setPicker(date)} className='form-control' />
        </div> */}
        <h2 className="my-2">Add Service</h2>
        <div className="mb-1">
          <Label for="payment-method" className="form-label">
            Service name
          </Label>
          <Input value={selectedCardType} onChange={handleSelectCard} type="select" id="payment-method" defaultValue="">
            <option value="Paypal">Card Issuance</option>
            <option value="Credit">Virtual Account</option>
            <option value="fraud">Anti card fraud solutions</option>
            <option value="bill">Bill Payment</option>
            <option value="remittance">Remittance</option>
          </Input>
        </div>
        {selectedCardType === "Paypal" &&
        <div>
            <div className="mb-1">
          <Label for="payment-method" className="form-label">
            What are you building for?
          </Label>
          <Input type="select" id="payment-method" defaultValue="">
            <option value="lending">Lending</option>
            <option value="personal-finance">Personal finances</option>
            <option value="consumer">Consumer Payments</option>
            <option value="banking">Banking and Brokerage</option>
          </Input>
        </div>
        <div className="mb-1">
          <Label for="payment-method" className="form-label">
            Select card type
          </Label>
          <Input value={selectedClient} onChange={handleSelectChange} type="select" id="payment-method" defaultValue="">
            <option value="Physical Card">Physical Card</option>
            <option value="Virtual Card">Virtual Card</option>
            <option value="Both">Physical and Virtual</option>
          </Input>
        </div>
        <div>
          <div style={{display: "flex", width: "100%"}} className="form-check form-check-inline">
            {selectedClient &&  <div style={{width: "35%"}}>{selectedClient}</div>}
          
            <div style={{width: "35%"}}>
              <Input type="checkbox" id="basic-cb-unchecked" />
              <Label for="basic-cb-unchecked" className="form-check-label">
                NGN
              </Label>
            </div>
            <div>
              <Input type="checkbox" id="basic-cb-unchecked" />
              <Label for="basic-cb-unchecked" className="form-check-label">
                USSD
              </Label>
            </div>
          </div>
        </div>
        </div>}
        <div style={{marginTop: "20px", marginBottom: "20px", border: "1px solid #ccc", padding: "0.571rem 1rem 0.571rem 1rem", borderRadius: "0.357rem"}}>
        <Link to="/files/card-issuance-onboarding.pdf" target="_blank" download>Download onboarding form</Link>
        </div>
        <Col style={{marginTop: "20px", marginBottom: "20px"}} md="12" sm="12">
                <Label className="form-label" for="inputFile">
                  Upload KYB from download template
                </Label>
                <Input type="file" id="inputFile" name="fileInput" />
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
              <Label className="form-check-label" htmlFor="billing-switch">
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
              I Agree to the company Privacy Policy & Terms
            </Label>
          </div>
        </Col>
        {/* <div className='mb-1'>
          <Label for='payment-note' className='form-label'>
            Internal Payment Note
          </Label>
          <Input type='textarea' rows='5' id='payment-note' placeholder='Internal Payment Note' />
        </div> */}
        <div style={{ marginTop: "10px" }} className="d-flex flex-wrap mb-0">
          <Button className="me-1" color="primary" onClick={toggleSidebar}>
            Send
          </Button>
          <Button color="secondary" outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalAdd
