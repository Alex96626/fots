import type { FC } from 'react';

import {
    Box,
    Typography,
    Divider,
    CircularProgress,
    Paper,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

import './DealDetails.css';
import type { DealDetailsProps } from './DealDetails.types';

const DealDetails: FC<DealDetailsProps> = ({ deal }) => {
    return (
        <Paper elevation={4} sx={{ p: 2, width: '100%', maxWidth: 900 }}>
            <Box>
                {!deal && <CircularProgress />}

                { deal && (
                    <>
                        <Typography variant='subtitle2'>
                            Лид ID: {deal.leadId}
                        </Typography>

                        <Paper
                            sx={{
                                bgcolor: '#fff8e1',
                                borderRadius: 1,
                                p: 2,
                                mt: 2,
                            }}
                        >
                            <ul className='deal-summaries'>
                                <li className='deal-summary'>
                                    Стоимость:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.summary.price} ₽
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    Маржа:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.summary.margin} ₽
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    Налоги:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.summary.taxes} ₽
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    НДС:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.summary.nds} ₽
                                    </span>
                                </li>
                            </ul>
                        </Paper>

                        <Paper
                            sx={{
                                bgcolor: '#fff8e1',
                                borderRadius: 1,
                                p: 2,
                                mt: 2,
                            }}
                        >
                            <ul className='deal-summaries'>
                                <li className='deal-summary'>
                                    Ориентировочная длительность процедуры банкротства:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.duration.durationTotal} ₽
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    Подготовка к суду:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.duration.durationBeforeCurt} ₽
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    В суде:
                                    <span className='deal-summary__price'>
                                       {deal.qualLead.duration.durationCurt} ₽
                                    </span>
                                </li>
                            </ul>
                        </Paper>
                        <Paper
                            sx={{
                                bgcolor: '#fff8e1',
                                borderRadius: 1,
                                p: 2,
                                mt: 2,
                            }}
                        >
                            <ul className='deal-summaries'>
                                <li className='deal-summary'>
                                    Тип договора{' '}
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.contractType}
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                   Риска РД:
                                    <span className='deal-summary__price'>
                                        {deal.qualLead.isRD}
                                    </span>
                                </li>
                                <li className='deal-summary'>
                                    Признаков ВБФЛ:
                                    <span className='deal-summary__price'>
                                       {deal.qualLead.isVBFL}
                                    </span>
                                </li>
                            </ul>
                        </Paper>

                        <Divider sx={{ my: 2 }} />

                        <div
                            className='deal-category'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <CategoryIcon sx={{ color: '#929292' }} />
                            <Typography variant='subtitle1'>
                                Категории
                            </Typography>
                        </div>

                        {deal.qualLead.categories.map((cat) => (
                            <Box key={cat.name} sx={{ mt: 2 }}>
                                <Typography fontWeight={600}>
                                    {cat.name}
                                </Typography>

                                {cat.items.map((i, idx) => (
                                    <Typography key={idx} variant='body2'>
                                        {i.name} x {i.count} - {i.price} р.
                                    </Typography>
                                ))}
                            </Box>
                        ))}
                    </>
                )}
            </Box>
        </Paper>
    );
};

export { DealDetails };

// export в exel
