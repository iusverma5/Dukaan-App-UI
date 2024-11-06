import React from "react"

function Transactions(){

    return(
        <div className="flex flex-col gap-6">
            <div>
                <p className="font-medium text-xl">Transactions | This Month</p>
            </div>
            <div className="flex gap-3 text-sm">
                <span className="bg-black-200 rounded-2xl text-black-300 py-1.5 px-4">Payouts(25)</span>
                <span className="bg-blue-700 rounded-2xl text-white-500 py-1.5 px-4">Refunds(7)</span>
            </div>
        </div>
    )
}

export default Transactions