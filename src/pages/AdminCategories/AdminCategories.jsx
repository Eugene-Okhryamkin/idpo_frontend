import React, {useEffect, useState} from "react";
import Table from "Containers/Table/Table.jsx";
import AddCategory from "Pages/AddCategory/AddCategory.jsx";
import EditCategory from "Pages/EditCategory/EditCategory.jsx";
import AdminCategoriesTableItem from "Components/AdminCategoriesTableItem/AdminCategoriesTableItem.jsx";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    editPage: state.edit.isOpen,
    addPage: state.add.isOpen
});

const AdminCategories = props => {
    const tableCols = ["Название категории", "Статус"];
    const [adminCategories, setAdminCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch("http://194.67.116.27:8080/api/get_category?orderType=LIST&categoryType=ProgramType")
                .then(res => res.json())
                .then(data => setAdminCategories(data))
        }

        fetchData();
    }, []);

    const isEditOpen = () => {
        const { editPage, addPage } = props;
        console.log(addPage);
        if(editPage) {
            return <EditCategory />
        }

        if(addPage) {
            return <AddCategory />
        }


        return <Table tableName="Категории" cols={tableCols}  tableElements={adminCategories} Component={AdminCategoriesTableItem} />
    }

    return (
        isEditOpen()
    )
}


export default connect(mapStateToProps, null)(AdminCategories);