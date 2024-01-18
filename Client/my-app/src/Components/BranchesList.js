import { connect } from "react-redux"
import { actions } from "../Redux/actions"
import { Button } from 'react-bootstrap'
import SingleBranch from "./singleBranch"


function mapStateToProps(state) {
    return {
        branches: state.branchesReducer.branchesList,
        selectedRegion: state.branchesReducer.selectedRegion,
        selectedCity: state.branchesReducer.selectedCity,
        currentBranch: state.branchesReducer.currentBranch,
        searchText: state.branchesReducer.searchText
    }
}

export const mapDispatchToProps = (dispatch) => ({
    updateCurrentBranch: (currentBranch) => dispatch(actions.updateCurrentBranch(currentBranch))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    function BranchesList(props) {

        const { branches, updateCurrentBranch, selectedCity, selectedRegion, currentBranch, searchText } = props;
        const filterBranches = searchText
            ? branches.filter((branch) => (branch.store_title.toLowerCase().includes(searchText.toLowerCase())))
            : branches.filter((branch) => (selectedRegion === 0 || branch.store_region === selectedRegion) && (selectedCity === "" || branch.city === selectedCity))

        return (
            <>
                {filterBranches !== undefined && filterBranches.length > 0 ?
                    filterBranches.map((branch) => (
                        <div key={branch.store_id} className="col-3">
                            <Button type="button" variant="outline-white" className="d-flex mt-3" onClick={() => updateCurrentBranch(branch)}>
                                <h6>{branch.store_title}</h6>
                            </Button>
                        </div>
                    )) : ""}


                {currentBranch.store_id && <SingleBranch currentBranch={currentBranch}></SingleBranch>}
            </>
        )
    }
)
