import { useState } from "react";
import Image from "next/image";
import { TableDataType1 } from ".";
import style from "../styles/save_modal.module.css";
type UpdateModalBoxPropsType = {
  handleOnClose: () => void;
  updateFunction: (value: TableDataType1) => void;
  selectedVal: TableDataType1;
  setShowUpdateAlert: (save: boolean) => void;
};
const UpdateModalBox = ({
  handleOnClose,
  setShowUpdateAlert,
  selectedVal,
  updateFunction,
}: UpdateModalBoxPropsType) => {
  const [updatePetName, setUpdatePetName] = useState<string>(
    selectedVal.petName
  );
  const [updateStatus, setUpdateStatus] = useState(selectedVal.status);
  const [updatePawrent, setUpdatePawrent] = useState(selectedVal.pawrent);
  const [updateBreed, setUpdateBreed] = useState(selectedVal.breed);
  const [updateGender, setUpdateGender] = useState(selectedVal.gender);
  const [updateDateOfBirth, setUpdateDateOfBirth] = useState(
    selectedVal.dateOfBirth
  );
  const [updateContent, setUpdateContent] = useState(
    selectedVal.contactPhoneNo
  );
  const [updateAddress, setUpdateAddress] = useState(selectedVal.address);
  const [updateCity, setUpdateCity] = useState(selectedVal.city);
  const [updateTownship, setUpdateTownship] = useState(selectedVal.township);
  console.log("createForm");

  return (
    <div
      className={style.addmodaldiv}
      style={{
        display: "block",
      }}
    >
      <div className={style.addmodalbox}>
        <div className={style.closeimgdiv}>
          <button onClick={handleOnClose}>
            <Image
              className={style.closebtn}
              src="/close.png"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
        <div className={style.h1}>Update patient</div>
        <div className={style.sub_title}>Enter update information below</div>
        <div className={style.modalbody}>
          <div className={style.row}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                flex: 1,
              }}
            >
              <p>Pet Name</p>
              <input
                type="text"
                value={updatePetName}
                onChange={(e) => {
                  setUpdatePetName(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Status</p>
              <select
                value={updateStatus}
                onChange={(e) => {
                  setUpdateStatus(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose status
                </option>
                <option value="allergy">allergy</option>
                <option value="picky">picky</option>
              </select>
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Patient</p>
              <input
                type="text"
                value={updatePawrent}
                onChange={(e) => {
                  setUpdatePawrent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Breed</p>
              <select
                value={updateBreed}
                onChange={(e) => {
                  setUpdateBreed(e.target.value);
                }}
              >
                <option value="choose" disabled selected>
                  please choose breed
                </option>
                <option value="beagle">Beagle</option>
                <option value="spaniel">Spaniel</option>
                <option value="goldenretriever">Golden Retriever</option>
              </select>
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Gender</p>
              <div
                className="radio"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  checked={updateGender == "Male" ? true : false}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUpdateGender(e.target.value);
                  }}
                  value="male"
                />
                <p>Male</p>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  checked={updateGender == "Female" ? true : false}
                  onChange={(e) => setUpdateGender(e.target.value)}
                  value="female"
                />
                <p>Female</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Date of Birth</p>
              <input
                type="date"
                value={updateDateOfBirth}
                onChange={(e) => {
                  setUpdateDateOfBirth(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Content</p>
              <input
                type="text"
                value={updateContent}
                onChange={(e) => {
                  setUpdateContent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Address</p>
              <input
                type="text"
                value={updateAddress}
                onChange={(e) => {
                  setUpdateAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.row}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <p>City</p>
              <select
                value={updateCity}
                onChange={(e) => {
                  setUpdateCity(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose city
                </option>
                <option value="yangon">Yangon</option>
                <option value="mandalay">Mandalay</option>
                <option value="naypyitaw">Naypyitaw</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Township</p>
              <select
                value={updateTownship}
                onChange={(e) => {
                  setUpdateTownship(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose Township
                </option>
                <option value="hlaing">Hlaing</option>
                <option value="mayangone">Mayangone</option>
                <option value="hlaingtharyar">Hlaing Thar Yar</option>
              </select>
            </div>
          </div>
          <div className={style.buttons}>
            <button
              className={style.update}
              onClick={() => {
                updateFunction({
                  ...selectedVal,
                  petName: updatePetName,
                  status: updateStatus,
                  pawrent: updatePawrent,
                  breed: updateBreed,
                  gender: updateGender,
                  dateOfBirth: updateDateOfBirth,
                  address: updateAddress,
                  city: updateCity,
                  township: updateTownship,
                  contactPhoneNo: updateContent,
                });

                handleOnClose();
                setShowUpdateAlert(true);
                setTimeout(() => {
                  setShowUpdateAlert(false);
                }, 3000);
              }}
            >
              Update
            </button>
            <button onClick={handleOnClose} className={style.cancle}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModalBox;
