var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumSales(sales) {
  var sum = 0;
  for (var i = 0; i < sales.length; i++) {
    sum += sales[i];
  }
  return sum;
}

function tax(taxes, index) {
  return taxes[index];

}

function calculateSalesTax(salesData, taxRates) {

  var companiesKeys = Object.keys(salesData);
  var newObj = {};

  companiesKeys.forEach( function(key) {
    var company = salesData[key];
    var companyName = company.name;
    var province = company.province;
    var totalSales = sumSales(company.sales);
    var taxRate = tax(taxRates, province);
    var calc = {};

    calc['totalSales'] = totalSales;
    calc['totalTaxes'] = totalSales * taxRate;

    if (companyName in newObj) {
      newObj[companyName]['totalSales'] += totalSales;
      newObj[companyName]['totalTaxes'] += totalSales * taxRate;

    } else {
      newObj[companyName] = calc
    }

  });
  return newObj
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/