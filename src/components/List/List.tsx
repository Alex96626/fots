import { useEffect, useState, type FC } from 'react';

import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { ExportToExcel } from '../ExportToExcel/ExportToExcel';

type DealData = {
    id: number;
    qualLeadPrice: number;
    currentPrice: number;
    qualSorgePrice: number;
};

type List = DealData[];

type ListProps = {
    onGetDealDetail: (dealId: number) => void;
};

const List: FC<ListProps> = ({ onGetDealDetail }) => {
    const [dealList, setDealList] = useState<List | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const responseParam = new URLSearchParams({
                action: 'list',
            });

            const response = await fetch(
                `https://dev-study.fcb.expert/local/app/UnitEconomic/api/index.php?${responseParam}`
            );
            const deals: List = await response.json();

            setDealList(deals);
            onGetDealDetail(deals[0]?.id);
        })();
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'id сделки',
            width: 150,
            editable: true,
        },
        {
            field: 'currentPrice',
            headerName: 'Текущая стоимость',
            type: 'number',
            width: 150,
        },
        {
            field: 'Квал Зорге',
            headerName: 'Квал Зорге',
            type: 'number',
            width: 150,
        },
        {
            field: 'qualLeadPrice',
            headerName: 'Квал лида',
            type: 'number',
            width: 150,
        },
    ];

    const rows = dealList?.map(
        ({ id, qualLeadPrice, currentPrice, qualSorgePrice }: DealData) => {
            return {
                id,
                qualLeadPrice,
                currentPrice,
                qualSorgePrice,
            };
        }
    );

    return (
        <>
            <Paper elevation={4} sx={{ p: 2, width: '100%', maxWidth: 900 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter
                    onRowClick={(params) => {
                        const dealId: number = Number(params.id);

                        onGetDealDetail(dealId);
                    }}
                />
                <ExportToExcel dealList={dealList}/>
            </Paper>
        </>
    );
};

export { List };
