import React from 'react'
import TransactionInfoCard from '../cards/TransactionInfoCard'
import moment from 'moment'
import { LuArrowRight } from 'react-icons/lu'

function ExpenseTransactions({transactions,onSeeMore}) {
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Expenses</h5>
                <button className='card-btn' onClick={onSeeMore}>
                    see All <LuArrowRight className="text-base"/>
                </button>
            </div>

            <div className='mt-6'>
                {transactions?.slice(0,4)?.map((expense)=>(
                    <TransactionInfoCard
                     key={expense._id}
                     title={expense.category}
                     icon={expense.icon}
                     date={moment(expense.data).format("Do MMM YYYY")}
                     amount={expense.amount}
                     type="expense"
                     hideDeleteBtn
                     />
                ))}
            </div>
        </div>
    )
}

export default ExpenseTransactions
