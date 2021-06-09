import React, {useEffect} from "react";
import Table from "Containers/Table/Table.jsx";
import { connect } from "react-redux";
import {getUsers} from "Actions/getUsersAction";
import propTypes from "prop-types";
import EditUser from "Pages/EditUser/EditUser.jsx";
import AddUser from "Pages/AddUser/AddUser.jsx";

const mapStateToProps = state => ({
    users: state.users.users,
    editPage: state.edit.isOpen,
    addPage: state.add.isOpen
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
});

const AdminUsers = props => {
    const tableCols = ["Имя", "Статус"];

    useEffect( () => {
        async function fetchData() {
            const { getUsers } = props;
            await getUsers();
        }

        fetchData();
    }, [])

    const isEditOpen = () => {
        const { editPage, addPage} = props;
        if(editPage) {
            return <EditUser />
        }

        if(addPage) {
            return <AddUser />
        }

        return <Table tableName="Пользователи" cols={tableCols}  tableElements={props.users} />
    }


    return (
        <>
            {isEditOpen()}

        </>

    );
}

AdminUsers.propTypes = {
    users: propTypes.array.isRequired,
    getUsers: propTypes.func.isRequired,
    editPage: propTypes.bool.isRequired,
    addPage: propTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);