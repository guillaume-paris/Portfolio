import React from 'react';
import { Select, Option } from "@material-tailwind/react";

const Resume = () => {

    const pdfFile: Record<string, string> = {
        'en': 'Resume-guillaume-paris',
        'fr': 'CV-guillaume-paris'
      };
    
    const [ languageVersion, setLanguageVersion ] = React.useState<string>('en');

    const handleDownload = () => {
        const link = document.createElement("a");
        link.download = pdfFile[languageVersion] + '.pdf';
        link.href = '/documents/' + pdfFile[languageVersion] + '.pdf';
        link.click();
    };
    
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="">
                <Select
                    className="text-white"
                    id="select-language-version"
                    value={languageVersion}
                    label="Language version"
                    onChange={() => setLanguageVersion(languageVersion === 'en' ? 'fr' : 'en')}>
                    <Option value={'en'} className="text-black">English</Option>
                    <Option value={'fr'} className="text-black">Français</Option>
                </Select>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
                    Download pdf
                </button>
            </div>
            <img src={'/documents/' + pdfFile[languageVersion] + '.jpg'} alt='Resume' className="2xl:w-2/4 md:w-2/3 w-11/12"/>
        </div>
    );
}

export default Resume;