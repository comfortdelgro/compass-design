export const FileType = {
  image: {
    accept: 'image/*',
    label: 'PNG, JPEG',
    type: ['image/jpeg', 'image/jpg', 'image/png'],
  },
  pdf: {
    accept: '.pdf',
    label: 'PDF',
    type: ['application/pdf'],
  },
  doc: {
    accept: '.doc, .docx',
    label: 'DOC, DOCX',
    type: [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  },
  excel: {
    accept: '.xlsx',
    label: 'XLSX',
    type: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  },
  csv: {
    accept: '.csv',
    label: 'CSV',
    type: ['text/csv'],
  },
}

//   export interface FileTypeItem {
//     accept: string;
//     label: string;
//     type: string[];
//   }

export const SizeUnit = 1024 // unit for convert file size

export enum StorageKey {
  remainVerifyAccountTime = 'remain-verify-account-time',
}

export const MaxOTPTime = 60000
