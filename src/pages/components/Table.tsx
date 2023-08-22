import Image from "next/image";
import style from "../../styles/table.module.css";
import { TableDataType1 } from "..";
type TableDataPropsType = {
  tableData: TableDataType1[];
  handleOnDelete: (val: TableDataType1) => void;
  handleOnUpdate: (val: TableDataType1) => void;
};
const Table = ({
  tableData,
  handleOnDelete,
  handleOnUpdate,
}: TableDataPropsType) => {
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Pet Name</th>
            <th>Status</th>
            <th>Pawrent</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Contact Phone No.</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val: TableDataType1, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{val.petName}</td>
                <td>{val.status}</td>
                <td>{val.pawrent}</td>
                <td>{val.breed}</td>
                <td>{val.gender}</td>
                <td>{val.dateOfBirth}</td>
                <td>{val.contactPhoneNo}</td>
                <td>{val.address}</td>
                <td>
                  <div className={style.more}>
                    <Image
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                      }}
                      src="/more.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <div className={style.button1}>
                      <button
                        onClick={() => {
                          handleOnUpdate(val);
                        }}
                        className={style.edit_btn}
                      >
                        {
                          <Image
                            style={{
                              marginRight: "5px",
                            }}
                            src="/edit.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        }
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleOnDelete(val);
                        }}
                        className={style.delete_btn}
                      >
                        {
                          <Image
                            style={{
                              marginRight: "5px",
                            }}
                            src="/delete.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        }
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
