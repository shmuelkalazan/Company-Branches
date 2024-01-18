import { connect } from "react-redux"
import { actions } from "../Redux/actions"
import { useRef } from "react"


function mapStateToProps(state) {
    return {
        branches: state.branchesReducer.branchesList,
        selectedRegion: state.branchesReducer.selectedRegion,
        selectedCity: state.branchesReducer.selectedCity,
        searchText: state.branchesReducer.searchText
    }
}

export const mapDispatchToProps = (dispatch) => ({
    updateCurrentBranch: (branch) => dispatch(actions.updateCurrentBranch(branch)),
    updateSelectedRegion: (region) => dispatch(actions.updateSelectedRegion(region)),
    updateSelectedCity: (city) => dispatch(actions.updateSelectedCity(city)),
    updateSearchText: (searchText) => dispatch(actions.updateSearchText(searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(
    function Filter(props) {

        const filterInput = useRef()
        const { branches, updateSelectedRegion, updateSelectedCity, selectedRegion, updateSearchText, searchText } = props;
        const regions = [...new Set(branches && branches.map(branch => branch.store_region))];
        const cities = [...new Set(branches !== undefined && branches && branches.filter((branch) => selectedRegion === 0 || branch.store_region === selectedRegion).map(branch => branch.city))];

        function filterBranches(searchText) {
            updateSelectedRegion(0);
            updateSelectedCity("");
            updateSearchText(searchText)
        }

        return (
            <>
                <div className="col-3">
                    <select value="Select Region" className="btn btn-outline-black p-2 mx-3 dropdown-toggle" onChange={(e) => updateSelectedRegion(e.target.value)}>
                        <option value={0}>All Regions</option>
                        {regions !== undefined && regions && regions.map((region, index) => (
                            <option key={index} value={region} className="btn btn-white btn-hover-bg-white">
                                {region}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-3">
                    <select value="Select City" className="btn btn-outline-econdary p-2 mx-3" onChange={(e) => updateSelectedCity(e.target.value)}>
                        <option value="">All Cities</option>
                        {cities !== undefined && cities && cities.map((city, index) => (
                            <option key={index} value={city} className="dropdown-item">
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-3">
                    <input type="text" ref={filterInput} name="search" placeholder="Search Your Branch" aria-label="Search" aria-describedby="search-addon" value={searchText} onChange={(e) => { filterBranches(e.target.value) }} />
                </div>
            </>
        )
    }
)
