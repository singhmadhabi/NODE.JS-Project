//Write a nodejs application to convert the currency from one
// currency to another using package: currency-converter-lt
/*
const CC = require("currency-converter-lt");
let currencyConverter = new CC();

currencyConverter
  .from("USD")
  .to("NPR")
  .amount(125)
  .convert()
  .then((response) => {
    console.log(response); //or do something else
  });
  */
/*
  const CC = require("currency-converter-lt");

  async function convertCurrency(fromCurrency, toCurrency, amount) {
    const currencyConverter = new CC();
  
    try {
      const response = await currencyConverter
        .from(fromCurrency)
        .to(toCurrency)
        .amount(amount)
        .convert();
  
      return response;
    } catch (error) {
      console.error("Error converting currency:", error);
      return null;
    }
  }
  
  // Convert 125 USD to NPR
  convertCurrency("USD", "NPR", 125)
    .then((response) => {
      if (response) {
        console.log(`Converted Amount: ${response}`);
      }
    });
    */
