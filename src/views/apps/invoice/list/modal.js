import React from 'react'

export default function TheModal() {
    return (

        <Modal
            isOpen={show}
            toggle={() => setShow(!show)}
            className="modal-dialog-centered modal-sm"
        >
            <ModalHeader
                className="bg-transparent"
                toggle={() => setShow(!show)}
            ></ModalHeader>
            <ModalBody className="px-sm-5 mx-50 pb-5">
                <div className="text-center mb-2">
                    <h1 className="mb-1">Edit User Information</h1>
                    <p>Updating user details will receive a privacy audit.</p>
                </div>
            </ModalBody>
        </Modal>
    )
}
