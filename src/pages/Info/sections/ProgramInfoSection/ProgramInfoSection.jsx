import React from "react";
import ProgramInfoTableContainer from "Containers/ProgramInfoTableContainer/ProgramInfoTableContainer.jsx";
import {useParams} from "react-router";
import {setId} from "Actions/getInfoByIDAction.js";
import { connect } from "react-redux";
import propTypes from "prop-types";


const mapDispatchToProps = dispatch => ({
    setId: id => dispatch(setId(id))
})

const ProgramInfoSection = props => {
    const { id } = useParams();
    const { setId } = props;

    if(id) {
        setId(id);
    }

    return (
        <section id="program-info">
            <div className="table-section">
                <table className="table table-hover">
                    <ProgramInfoTableContainer />
                </table>
            </div>
        </section>
    )
}

ProgramInfoSection.propTypes = {
    setId: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(ProgramInfoSection);