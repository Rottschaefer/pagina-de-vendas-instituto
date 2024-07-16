import { JWT } from "google-auth-library";

import { GoogleSpreadsheet } from "google-spreadsheet";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

export const serviceAccountAuth = new JWT({
  email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: import.meta.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});

export const doc = new GoogleSpreadsheet(
  import.meta.env.GOOGLE_SHEET_ID,
  serviceAccountAuth
);
