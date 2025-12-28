import type { FC } from "react";
import * as XLSX from "xlsx";

import type { List } from "../List/List";

type ExportToExcelProps = {
    dealList: List | undefined
};

const ExportToExcel: FC<ExportToExcelProps> = ({ dealList }) => {

    const handlerExportToExcel = () => {
        if(!dealList) {
            return;
        }

       const worksheet = XLSX.utils.json_to_sheet(dealList);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Deals");

        XLSX.writeFile(workbook, "КвалЛида.xlsx"); 
    }

    return (
        <button onClick={handlerExportToExcel}>Скачать excel</button>
    )
}

export { ExportToExcel }