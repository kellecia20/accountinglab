import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Form, Row, Col } from 'react-bootstrap';

const JournalEntry = () => {
    const [showModal, setShowModal] = useState(false);
    const [entries, setEntries] = useState(() => {
        const savedEntries = localStorage.getItem('journalEntries');
        return savedEntries ? JSON.parse(savedEntries) : [];
    });
    const [newEntry, setNewEntry] = useState({
        date: '',
        description: '',
        debits: [{ name: '', value: '' }],
        credits: [{ name: '', value: '' }]
    });

    useEffect(() => {
        localStorage.setItem('journalEntries', JSON.stringify(entries));
    }, [entries]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };

    const handleDebitChange = (index, e) => {
        const { name, value } = e.target;
        const debits = [...newEntry.debits];
        debits[index][name] = value;
        setNewEntry({ ...newEntry, debits });
    };

    const handleCreditChange = (index, e) => {
        const { name, value } = e.target;
        const credits = [...newEntry.credits];
        credits[index][name] = value;
        setNewEntry({ ...newEntry, credits });
    };

    const handleAddDebit = () => {
        setNewEntry({ ...newEntry, debits: [...newEntry.debits, { name: '', value: '' }] });
    };

    const handleAddCredit = () => {
        setNewEntry({ ...newEntry, credits: [...newEntry.credits, { name: '', value: '' }] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, newEntry]);
        setNewEntry({
            date: '',
            description: '',
            debits: [{ name: '', value: '' }],
            credits: [{ name: '', value: '' }]
        });
        handleClose();
    };

    return (
        <div>
            <Button variant="primary" style={{ marginBottom: "10px" }} onClick={handleShow}>
                Add Entry
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Debits</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>
                                {entry.debits.map((debit, i) => (
                                    <div key={i}>{debit.name}: {debit.value}</div>
                                ))}
                            </td>
                            <td>
                                {entry.credits.map((credit, i) => (
                                    <div key={i} style={{ paddingLeft: '20px' }}>{credit.name}: {credit.value}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Journal Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={newEntry.date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newEntry.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <h5>Debits</h5>
                                {newEntry.debits.map((debit, index) => (
                                    <Row key={index}>
                                        <Col>
                                            <Form.Group controlId={`debitName${index}`}>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={debit.name}
                                                    onChange={(e) => handleDebitChange(index, e)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId={`debitValue${index}`}>
                                                <Form.Label>Value</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="value"
                                                    value={debit.value}
                                                    onChange={(e) => handleDebitChange(index, e)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                ))}
                                <Button variant="secondary" style={{ marginTop: "10px" }} onClick={handleAddDebit}>
                                    Add Debit
                                </Button>
                            </Col>
                            <Col>
                                <h5>Credits</h5>
                                {newEntry.credits.map((credit, index) => (
                                    <Row key={index}>
                                        <Col>
                                            <Form.Group controlId={`creditName${index}`}>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={credit.name}
                                                    onChange={(e) => handleCreditChange(index, e)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId={`creditValue${index}`}>
                                                <Form.Label>Value</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="value"
                                                    value={credit.value}
                                                    onChange={(e) => handleCreditChange(index, e)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                ))}
                                <Button variant="secondary" style={{ marginTop: "10px" }} onClick={handleAddCredit}>
                                    Add Credit
                                </Button>
                            </Col>
                        </Row>
                        <Button variant="primary" style={{ marginTop: "10px", float: "right" }} type="submit">
                            Add Entry
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default JournalEntry;