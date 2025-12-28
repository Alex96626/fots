import { useState } from 'react';
import { DealDetails } from './components/DealDetails/DealDetails';
import { List } from './components/List/List';

import type { Deal } from './components/DealDetails/DealDetails.types';

import './App.css';

const App = () => {
    const [dealsCache, setDealsCache] = useState<Record<number, Deal>>({});
    const [deal, setDeal] = useState<Deal | undefined>(undefined);

    const handlerGetDealDetails = async (dealId: number) => {
        if (dealsCache[dealId]) {
            setDeal(dealsCache[dealId]);
            return;
        }

        const responseParam = new URLSearchParams({
            action: 'detail',
            dealId: String(dealId),
        });

        const response = await fetch(
            `https://dev-study.fcb.expert/local/app/UnitEconomic/api/index.php?${responseParam}`
        );
        const deal: Deal = await response.json();
        setDealsCache((prev) => ({
            ...prev,
            [dealId]: deal,
        }));
        setDeal(deal);
    };

    return (
        <div className='qual'>
            <List onGetDealDetail={handlerGetDealDetails} />
            <DealDetails
                deal={deal}
            />
        </div>
    );
};

export default App;
