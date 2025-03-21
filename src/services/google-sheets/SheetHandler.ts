import { JWT } from 'google-auth-library';
import credentaials from './credentials-for-sheets.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { CreateRequiredSpreadsheets } from './SheetCreator';
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
];

export async function AddDataToSheet(sheetName: "Users-sheet" | "Aadhar-sheet" | "Registration-sheet" | "Queries-sheet", data: {
    Name?: string,
    Email?: string,
    "Phone Number"?: string,
    UserId?: string,
    "Address Line"?: string,
    City?: string,
    State?: string,
    Pincode?: string,
    "Aadhar Number"?: string,
    "Date of Birth"?: string,
    Address?: string,
    "Reference UserId"?: string,
    "RegistrationId"?: string,
    "TicketId"?: string,
    Query?: string,
    DateTime?: string,
}) {
    const jwt = new JWT({
        email: credentaials.client_email,
        key: credentaials.private_key,
        scopes: SCOPES,
    });
    const doc = new GoogleSpreadsheet('1kpVbVDNUXfoK9j1qsVddbfvhVubZijx-tI5JIeSoVgw', jwt);
    try {
        await CreateRequiredSpreadsheets()
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle[sheetName];
        await sheet.addRow({
            ...data,
            DateTime: new Date().toDateString()
        });
    } catch (error) {
        console.log(error);
    }
}
