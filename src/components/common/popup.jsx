import React from "react";
import { Button, Modal } from "react-bootstrap";

const popup = ({ show, closePopup, dataSource }) => {
  return (
    <>
      <Modal show={show} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>
            Champion's name: {dataSource && dataSource.name}
          </Modal.Title>
        </Modal.Header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ height: 100, width: 100, marginTop: 10 }}
            src={dataSource && dataSource.image_url}
          />
        </div>
        <Modal.Body>Armor: {dataSource && dataSource.armor}</Modal.Body>
        <Modal.Body>
          Attack Range: {dataSource && dataSource.attackrange}
        </Modal.Body>
        <Modal.Body>
          Move Speed: {dataSource && dataSource.movespeed}
        </Modal.Body>
        <Modal.Body>
          Attack Range: {dataSource && dataSource.attackrange}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closePopup}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default popup;
