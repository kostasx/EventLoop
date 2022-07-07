// https://www.i18next.com/
// Docs: https://react.i18next.com/latest/usetranslation-hook

// 1) npm install i18next react-i18next
import { Suspense, useState } from "react";
// 2) i18n + initReactI18next
import i18n from "i18next";
import { initReactI18next, Trans, useTranslation } from 'react-i18next'; // https://react.i18next.com/

// x) Plugins: npm install i18next-browser-languagedetector
import LanguageDetector from 'i18next-browser-languagedetector';

console.clear();

// 3) Translation Objects:
const enTranslation = { 
  welcome: "Welcome", 
  example: "<custom>Content</custom>",
  clicked: "You have clicked the counter {{ counter }} time",
  clicked_other: "You have clicked the counter {{ counter }} times"
}
const grTranslation = { 
  welcome: "Καλώς Ήλθατε", 
  example: "<custom>Περιεχόμενο</custom>",
  clicked: "Έχετε κλικάρει {{counter}} φορά",
  clicked_other: "Έχετε κλικάρει {{counter}} φορές"
}
const deTranslation = { 
  welcome: "Willkommen", 
  example: "<custom>Inhalt</custom>",
  clicked: "",
  clicked_other: ""
}

// 4) Load additional plugins to i18next: https://www.i18next.com/overview/api#use
i18n.use( initReactI18next )
// 4.1) 
.init({ 
  debug: true, // Extra information
  resources: { // Disable to test what it does...
    en: { translation: enTranslation }, 
    gr: { translation: grTranslation }, 
    de: { translation: deTranslation } 
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false } // escapes passed in values to avoid XSS injection
});


export default function App() {
  // 6) useTranslation Hook
  const { t } = useTranslation();
  const [ counter, setCounter ] = useState(0);
  const update = ()=> setCounter(counter+1);
  const langChange = e =>{
    // Switch Language:
    i18n.changeLanguage(e.target.value);
  }
  return (
    // 5) Suspense
    <Suspense fallback={"Loading..."}>
      <h1>{ t('welcome') }</h1>

      {/* Alternative: using Trans Component: */}
      <Trans>welcome</Trans>
      <br />

      {/* Advanced Interpolation */}
      <Trans components={{ custom: <strong /> }}>
        example
      </Trans>

      {/* Plural: */}
      <p>{t('clicked', { count: counter, counter })}</p>

      {/* Switching Language: */}
      <select onChange={langChange}>
        <option value="en">English</option>
        <option value="gr">Greek</option>
        <option value="de">German</option>
      </select>
      <p>
        <button onClick={update}>You clicked {counter} times</button>
      </p>
    </Suspense>
  );
}
