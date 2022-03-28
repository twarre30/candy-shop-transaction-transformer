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

function allSalesToArray(allSales){
    return Object.keys(allSales).map(date => salesDayToObject(date, allSales));
}






module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
