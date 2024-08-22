import { Card, Placeholder, Spinner } from "react-bootstrap"


const loadingCard: React.FC = () =>{
    return(
        <Card className="loadingCard">
            <div className="loadingImg">
                <Spinner animation="border" variant="secondary"/>
            </div>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} />
                </Placeholder>
            </Card.Body>
        </Card>
    )
}

export default loadingCard
