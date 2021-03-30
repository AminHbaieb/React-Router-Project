import React, { useState } from "react";
import { Button, Modal, FormControl, InputGroup } from "react-bootstrap";

function AddingModal({ AddMovie }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [movieRate, setRate] = useState("");
    const [posterUrl, setUrl] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // we declare the input inside the variable
    // let titleRef = useRef();
    // let descriptionRef = useRef();
    // let urlRef = useRef();

    // we are referring to input to change the value
    // const handleAdding = () => {
    //     setTitle(titleRef.current.value);
    //     setDescription(descriptionRef.current.value);
    //     setUrl(urlRef.current.value);
    // };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Title
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Rate
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Desccription</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            as="textarea"
                            aria-label="With textarea"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </InputGroup>
                    <label htmlFor="basic-url">Roster URL</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                https://example.com/users/
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id="basic-url"
                            aria-describedby="basic-addon3"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleAdding}> */}
                    <Button
                        variant="primary"
                        onClick={() => {
                            AddMovie({
                                title,
                                movieRate,
                                description,
                                posterUrl,
                            });
                            handleClose();
                        }}
                    >
                        Add movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddingModal;
