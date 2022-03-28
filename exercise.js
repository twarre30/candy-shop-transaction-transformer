function candySalesToObject([item, price, quantity]){
    return {
        item,
        price: +price,
        quantity,
    }
}

function salesDayToObject(date, salesDay){
    return {
        date
        sales: salesDay[date].map(candySalesToObject)
     }        
}

function allSalesToArray(salesDates){
    return Object.entries(salesDates)
        .map(([date, salesDate] => (
        salesDayToObject(date, {[date]: salesDate
       })
      ))
}






module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
