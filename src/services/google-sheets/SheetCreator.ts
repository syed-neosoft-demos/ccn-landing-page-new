import { JWT } from 'google-auth-library'
import credentaials from './credentials-for-sheets.json'
import { GoogleSpreadsheet } from 'google-spreadsheet'
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export async function CreateRequiredSpreadsheets() {
    const jwt = new JWT({
        email: credentaials.client_email,
        key: credentaials.private_key,
        scopes: SCOPES,
    })
    const doc = new GoogleSpreadsheet(
        '1kpVbVDNUXfoK9j1qsVddbfvhVubZijx-tI5JIeSoVgw',
        jwt
    )
    await doc.loadInfo()
    try {
        await doc.addSheet({ title: 'Aadhar-sheet' })
        const sheet = doc.sheetsByTitle['Aadhar-sheet']
        await sheet.setHeaderRow([
            'Name',
            'Aadhar Number',
            'Date of Birth',
            'Address',
            'Reference UserId',
            'DateTime',
        ])
    } catch (error) {
        // console.log(error);
    }
    try {
        await doc.addSheet({ title: 'Registration-sheet' })
        const sheet = doc.sheetsByTitle['Registration-sheet']
        await sheet.setHeaderRow([
            'Name',
            'Email',
            'Phone Number',
            'RegistrationId',
            'Reference UserId',
            'DateTime',
            'sourceUser',
        ])
    } catch (error) {
        // console.log(error);
    }
    try {
        await doc.addSheet({ title: 'Users-sheet' })
        const sheet = doc.sheetsByTitle['Users-sheet']
        await sheet.setHeaderRow([
            'Name',
            'Email',
            'Phone Number',
            'UserId',
            'Address Line',
            'City',
            'State',
            'Pincode',
            'DateTime',
            'sourceUser',
        ])
    } catch (error) {
        // console.log(error);
    }
    try {
        await doc.addSheet({ title: 'Queries-sheet' })
        const sheet = doc.sheetsByTitle['Queries-sheet']
        await sheet.setHeaderRow([
            'Name',
            'Email',
            'Phone Number',
            'TicketId',
            'Query',
            'DateTime',
            'sourceUser',
        ])
    } catch (error) {
        // console.log(error);
    }
}
