export type Deal = {
    leadId: number;
    qualLead: {
        summary: { price: number; margin: number; taxes: number; nds: number };
        categories: [
            {
                id: number;
                name: string;
                items: [
                    {
                        name: string;
                        count: number;
                        price: number;
                    }
                ];
            }
        ];
        contractType: string,
        isRD: string,
        isVBFL: string,
        duration: {
            durationBeforeCurt: string,
            durationCurt: string,
            durationTotal: string
        }
    };
    currentPrice: { price: number };
    qualSorge: { price: number };
};

export type DealDetailsProps = {
    deal?: Deal | null;
};
