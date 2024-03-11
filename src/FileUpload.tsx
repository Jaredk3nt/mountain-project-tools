import React from 'react';
import { parse } from 'csv-parse/browser/esm/sync';

type FileUploadProps = {
  onUpload: (fileContents: any) => void;
  onFailure: (message: string) => void;
}

export default function FileUpload({ onUpload, onFailure }: FileUploadProps) {

  const handleFileUpload = (e: any) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const fileExtension = file?.type.split("/")[1];

      if (fileExtension !== 'csv') {
        return onFailure('File must be of type .csv');
      }

      const reader = new FileReader();
      reader.onload = ({ target }) => {
        if (target && target.result) {
          const csv = parse(target.result as string, {
            delimiter: ',',
            columns: true,
            cast: (value, { quoting }) => {
              if (value === '') {
                return quoting ? '' : undefined;
              }

              return value;
            },
          });

          onUpload(csv);
        }
      };
      reader.readAsText(file);
    }
  }

  return (
    <input id="" name="" type="File" onChange={handleFileUpload} />
  )
}