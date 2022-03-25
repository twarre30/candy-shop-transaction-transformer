function candySalesToObject(sales){
    return {
        item: sales[0],
        price: + sales[1],
        quantity: sales[2]
    }
}

function salesDayToObject(date, sales){
    return sales[date].reduce((a, b) => {
        a.date = date
        a.sales.push(candySalesToObject(b))
        return a
    }, {sales: []})
        
}

function allSalesToArray(allSales){
    return Object.keys(allSales)
    .map(date => salesDayToObject(date, allSales));

}












module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
