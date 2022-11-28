import React, {useState} from "react"
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
import Select from 'react-select'
import { selectThemeColors } from '@utils'

// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { Check } from "react-feather"
import CreateAppExample from '../modal-examples/CreateApp'

const defaultValues = {
    email: "",
    password: ""
}
const countryOptions = [
  { value: 'ng', label: 'Nigeria' },
  { value: 'uk', label: 'Ghana' },
  { value: 'usa', label: 'Kenya' },
  { value: 'france', label: 'South Africa' },
  { value: 'russia', label: 'Uganda' },
  { value: 'canada', label: 'Ethiopia' }
]

const directorOptions = [
  { value: 'uk', label: 'Arogundade Abdulsadiq' },
  { value: 'SA', label: 'Shonowo Adenike' },
  { value: 'usa', label: 'Yusuf Oluwakemi' }
]

const BusinessOptions = [
  { value: 'uk', label: 'Business name (sole proprietor/partnership)' },
  { value: 'SA', label: 'Private Limited Liability' },
  { value: 'usa', label: 'Public Limited Liability Oluwakemi' }
]

const SignUpStepThree = () => {
     const [openModal, setOpenModal] = useState(false)

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
        <>
              <Form className='auth-register-form mt-2' onSubmit={e => e.preventDefault()}>
                <div className='mb-1 position-relative'>
                  <Label className='form-label' for='register-email'>
                    Work Email
                  </Label>
                  <Controller
                    id='email'
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <Input type='email' placeholder='john@example.com'
                        invalid={errors.email && true} {...field} />
                    )}
                  />
                  {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
                 <Check style={{ top: "30px", right: "10px" }} className="position-absolute" />
                </div>
                    <h6 className='mt-1 mb-2' style={{ color: "#4CAF50" }}>Email verification is successful</h6>
                    <div className='mb-2'>
                      <Label for='country' className='form-label'>
                        Country
                      </Label>
                      <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        options={countryOptions}
                        isClearable={false}
                      />
                    </div>
                    <Col sm='12' className='mb-1'>
                    <Label className="form-label" for='input-default'>
                    Business Class:
                  </Label>
                  <Select
                    id="status"
                    isClearable={false}
                    className="react-select"
                    classNamePrefix="select"
                    options={BusinessOptions}
                    theme={selectThemeColors}
                    defaultValue={BusinessOptions[0]}
                  />
                    </Col>
                    <Col sm='12' className='mb-1'>
                      <Label className='form-label' for='input-default'>
                        Enter RC Number
                      </Label>
                      <Input type='number' id='input-default' placeholder='22820181299' />
                    </Col>
                        <Col sm='12' className='mb-1'>
                          <Label className='form-label' for='input-default'>
                            Company Name
                          </Label>
                          <Input type='text' id='input-default' value='GetBuck Finance Company' disabled readOnly />
                        </Col>

                        <div className='mb-2'>
                          <Label for='country' className='form-label'>
                            Select Account Administrator
                          </Label>
                          <Select
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            options={directorOptions}
                            isClearable={false}
                          />
                        </div>
                    <div className='form-check mb-1'>
                      <Controller
                        name='terms'
                        control={control}
                        render={({ field }) => (
                          <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
                        )}
                      />
                      <Label className='form-check-label' for='terms'>
                        I agree to
                        <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                          privacy policy & terms
                        </a>
                      </Label>
                    </div>
                  <Button onClick={() => setOpenModal(!openModal)} type="button" block color="primary" >
                      <span className="ms-50">Submit</span>
                  </Button>
              </Form>
            {openModal && <CreateAppExample />}
        </>

    )
}

export default SignUpStepThree
