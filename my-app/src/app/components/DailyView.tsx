import React from 'react';
import WeeklySummary from './WeeklySummary';
import style from './DailyView.module.css'
import Link from 'next/link';

export default function DailyView() {
    return (
        <>
            <div className={style.dailyCard}>
                <Link href='/exercise'>
                    <button type='button' className={style.button}>
                        Add Exercise
                    </button>
                </Link>
            </div>
        </>
    );
};
