import React from 'react';
import Button from '../components/Button';

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
        <div className="flex flex-col justify-center items-center gap-4 py-16">
            <div className="mt-10 mb-5 w-1/5 flex flex-col gap-5 justify-center">
                <label className="block mb-2 text-md font-medium text-white">Select an option
                    <select 
                        className="mt-2 border text-lg rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        value={languageVersion}
                        onChange={(e) => setLanguageVersion(e.target.value)}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                    </select>
                </label>
                <Button type="button" onClick={handleDownload} color="primary">
                    Downoad pdf
                </Button>
            </div>
            <img src={'/documents/' + pdfFile[languageVersion] + '.jpg'} alt='Resume' className="2xl:w-2/4 md:w-2/3 w-11/12"/>
        </div>
    );
}

export default Resume;