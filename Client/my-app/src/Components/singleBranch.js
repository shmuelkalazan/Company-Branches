import { connect } from "react-redux"
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { actions } from "../Redux/actions"

function mapStateToProps(state) {
    return { currentBranch: state.branchesReducer.currentBranch }
}

export const mapDispatchToProps = (dispatch) => ({
    updateCurrentBranch: (currentBranch) => dispatch(actions.updateCurrentBranch(currentBranch))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    function SingleBranch(props) {

        const [showModal, setShowModal] = useState(true);
        const { updateCurrentBranch, currentBranch } = props;

        const handleUpdateCurrentBranch = () => {
            setShowModal(!showModal);
            updateCurrentBranch({});
        }
        return (
            <>
                <div className="container">
                    <Modal show={showModal} onHide={handleUpdateCurrentBranch}>
                        <Modal.Header closeButton className="text-center">
                            <Modal.Title className="w-100 text-center">😋{currentBranch.store_title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div><b>Id: </b>{currentBranch.store_id}</div>
                            <div><b>Address: </b>{currentBranch.store_address}</div>
                            <div><b>City: </b>{currentBranch.city}</div>
                            <div><b>Area: </b>{currentBranch.store_region}</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleUpdateCurrentBranch}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        )
    }
)