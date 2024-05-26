
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../styles/AuthenticatedLandingPage.module.css';

const AuthenticatedLandingPage = () => {
    return (
        <div className={styles.landingPageContainer}>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <Card className={`mb-3 ${styles.profileOverview}`}>
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>
                                    Welcome, [User Name]
                                </Card.Title>
                                <Card.Text className={styles.cardText}>
                                    Here is an overview of your profile.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className={`mb-3 ${styles.suggestions}`}>
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>
                                    Suggested Matches
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthenticatedLandingPage;
