//Write a nodejs application that can generate pdf using text and images. Use package: pdfkit

const PDFDocument = require("pdfkit");
const fs = require("fs");

let pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("SampleDocument.pdf"));
pdfDoc.text("My Sample PDF Document");
pdfDoc.end();
