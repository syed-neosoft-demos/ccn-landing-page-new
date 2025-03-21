const { JWT } = require('google-auth-library');
const XLSX = require('xlsx');
const credentaials = require('./src/services/google-sheets/credentials-for-sheets.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
];

const jwt = new JWT({
    email: credentaials.client_email,
    key: credentaials.private_key,
    scopes: SCOPES,
});
const doc = new GoogleSpreadsheet('1kpVbVDNUXfoK9j1qsVddbfvhVubZijx-tI5JIeSoVgw', jwt);
// console.log(doc);
async function CreateRequiredSpreadsheets() {
    const doc = new GoogleSpreadsheet('1kpVbVDNUXfoK9j1qsVddbfvhVubZijx-tI5JIeSoVgw', jwt);
    await doc.loadInfo();
    try {
        try {

            await doc.addSheet({ title: 'Aadhar-sheet' });
        } catch (error) {
            console.log("Aadhar-sheet already exist");

        }
        const sheet = doc.sheetsByTitle['Aadhar-sheet'];
        await sheet.setHeaderRow(['Name', 'Aadhar Number', 'Date of Birth', 'Address', "Reference UserId", "DateTime"]);
        console.log("Aadhar-sheet updated");

    } catch (error) {
        // console.log(error);
    }
    try {
        try {


            await doc.addSheet({ title: 'Registration-sheet' });
        } catch (error) {
            console.log("Registration-sheet already exist");
        }
        const sheet = doc.sheetsByTitle['Registration-sheet'];
        await sheet.setHeaderRow(['Name', 'Email', 'Phone Number', "RegistrationId", "Reference UserId", "DateTime"]);
        console.log("Registration-sheet updated");
    } catch (error) {
        // console.log(error);
    }
    try {
        try {

            await doc.addSheet({ title: 'Users-sheet' });
        } catch (error) {
            console.log("Users-sheet already exist");
        }
        const sheet = doc.sheetsByTitle['Users-sheet'];
        await sheet.setHeaderRow(['Name', 'Email', 'Phone Number', "UserId", "Address Line", "City", "State", "Pincode", "DateTime"]);
        console.log("Users-sheet updated");
    } catch (error) {
        // console.log(error);
    }
    try {
        try {

            await doc.addSheet({ title: 'Queries-sheet' });
        } catch (error) {
            console.log("Queries-sheet already exist");

        }
        const sheet = doc.sheetsByTitle['Queries-sheet'];
        await sheet.setHeaderRow(['Name', 'Email', 'Phone Number', "TicketId", "Query", "DateTime"]);
        console.log("Queries-sheet updated");
    } catch (error) {
        // console.log(error);
    }
}
// CreateRequiredSpreadsheets()


// async function AddDataToSheet(sheetName, data) {
//     await doc.loadInfo();
//     const sheet = doc.sheetsByTitle[sheetName];
//     await sheet.addRow(data);
// }

// AddDataToSheet('Aadhar-sheet', {
//     Name: "Rahul",
//     "Aadhar Number": "123456789",
//     "Date of Birth": "12/12/1990",
//     Address: "Delhi",
//     "Reference UserId": "123"
// })


async function UpdateSeet() {
    await doc.loadInfo();
    // let sheet = doc.sheetsByTitle['Master-Queries-sheet'];
    // await doc.deleteSheet(sheet.sheetId)
    // sheet = doc.sheetsByTitle['Master-Users-sheet'];
    // await doc.deleteSheet(sheet.sheetId)
    // sheet = doc.sheetsByTitle['Master-Registration-sheet'];
    // await doc.deleteSheet(sheet.sheetId)
    // sheet = doc.sheetsByTitle['Master-Aadhar-sheet'];
    // await doc.deleteSheet(sheet.sheetId)
    const xlsx = await doc.downloadAsXLSX()
    const workbook = XLSX.read(xlsx, { type: 'buffer' });

    // Write the workbook to a file
    XLSX.writeFile(workbook, "out.xlsx");


    // console.log(await sheet.getRows());
}
UpdateSeet()
