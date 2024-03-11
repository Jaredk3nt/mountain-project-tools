import React, { useMemo, useState } from 'react';
import FileUpload from './FileUpload';
import { cleanTickList } from './utils/mountainProject';
import tickList from './testData';

export default function App() {
  const [fileContent, setFileContent] = useState(tickList);
  const [error, setError] = useState<string>();

  const climbs = useMemo(() => {
    if (error) {
      return [];
    }

    return cleanTickList(fileContent).sort((a, b) => a.universalGrade - b.universalGrade);
  }, [fileContent, error]);

  const handleFileUpload = (content: any) => {
    setError('');
    setFileContent(content);
  };

  return (
    <>
      <h1>Hello World</h1>
      <div>This is my App</div>
      <FileUpload onUpload={handleFileUpload} onFailure={setError} />
      {error && <p>{error}</p>}
      {climbs && <div>
        {JSON.stringify(climbs, null, 2)}
      </div>}
    </>
  )
}