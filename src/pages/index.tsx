import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import "../styles/Main.module.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Table from "./components/Table";
import AddModalBox from "./add_modalbox";
import SaveAlert from "./save_alert";
import DeleteAlert from "./delete_alert";
import { useState } from "react";
import DeleteModal from "./delete_modal";
import UpdateModalBox from "./update_modal";
import UpdateAlert from "./update_alert";
const inter = Inter({ subsets: ["latin"] });
type TableDataType = {
  id: number;
  petName: string;
  status: string;
};

export interface TableDataType1 extends TableDataType {
  pawrent: string;
  gender: string;
  breed: string;
  dateOfBirth: string;
  contactPhoneNo: string | number;
  address?: string;
  city?: string;
  township?: string;
}
export default function Home() {
  const data: TableDataType1[] = [
    {
      id: 1,
      petName: "Milo",
      status: "allergy",
      pawrent: "The Nu San",
      breed: "Beagle",
      gender: "Female",
      dateOfBirth: "1.5.2021",
      contactPhoneNo: 9797122499,
      address: "Yangon",
    },
  ];
  const [tableData, setTableData] = useState(data);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedVal, setSelectedVal] = useState<any>(); //store table object data
  //Update function
  const updateFunction = (updatedVal: TableDataType1) => {
    setTableData((prev) => {
      const filteredData = prev.map((selectedVal) =>
        selectedVal.id == updatedVal?.id ? updatedVal : selectedVal
      );
      return filteredData;
    });
  };
  //delete function
  const deleteFunction = () => {
    if (selectedVal) {
      console.log(selectedVal);
      setTableData((prev) => {
        const filteredData = prev.filter((val) => val.id !== selectedVal.id);
        return filteredData;
      });
    }
  };
  return (
    <div className="main-ui">
      <TopBar />
      <Header handleOnClick={() => setShowAddModal(true)} />
      <Table
        tableData={tableData}
        handleOnDelete={(val) => {
          setShowDeleteModal(true);
          setSelectedVal(val);
        }}
        handleOnUpdate={(val) => {
          setShowUpdateModal(true);
          setSelectedVal(val);
          console.log("hello");
        }}
      />
      {showAddModal && (
        <AddModalBox
          handleOnClose={() => setShowAddModal(false)}
          handleOnSave={(newPet) => setTableData([...tableData, newPet])}
          setShowSaveAlert={setShowSaveAlert}
        />
      )}
      {showUpdateModal && (
        <UpdateModalBox
          handleOnClose={() => setShowUpdateModal(false)}
          selectedVal={selectedVal}
          updateFunction={updateFunction}
          setShowUpdateAlert={setShowUpdateAlert}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          deleteFunction={deleteFunction}
          setShowDeleteAlert={setShowDeleteAlert}
          handleOnClose={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
      {showDeleteAlert && <DeleteAlert />}
      {showSaveAlert && <SaveAlert />}
      {showUpdateAlert && <UpdateAlert />}
    </div>
  );
}
