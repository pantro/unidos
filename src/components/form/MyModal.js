import React, { useContext } from "react";
import { Modal, Button } from 'react-bootstrap';

import GetHelp from "../Help/GetHelp";
import AlertContext from "../../context/alert/AlertContext";
import ModalContext from "../../context/modal/ModalContext";

const MyModal = () => {

    //Obtener el state de Alerta
    const AlertsContext = useContext(AlertContext);
    const { ChangeMarkerCircle } = AlertsContext;


    //Obtener el state de modal
    const ModalsContext = useContext(ModalContext);
    const { modal, CloseModal } = ModalsContext;

    const SaveAlert = () => {
        ChangeMarkerCircle();
        CloseModal();
    }

    return (
        <Modal show={modal} onHide={CloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Llene sus datos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GetHelp/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={CloseModal}>
                Close
            </Button>
            <Button variant="primary" onClick={SaveAlert}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;