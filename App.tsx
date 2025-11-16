import React, { useState, useEffect, useCallback, Suspense, lazy, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Container from './components/ui/Container';
import Chatbot from './components/Chatbot';
import InteractiveBackground from './components/InteractiveBackground';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Theme, View } from './types';

// Lazy load components for better initial page load performance
const WedgeComparison = lazy(() => import('./components/WedgeComparison'));
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const ServiceModules = lazy(() => import('./components/ServiceModules'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const About = lazy(() => import('./components/About'));
const FitCheck = lazy(() => import('./components/FitCheck'));
const Investment = lazy(() => import('./components/Investment'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const FaqPage = lazy(() => import('./components/FaqPage'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'));

const Loader: React.FC = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
  </div>
);

const MainContent = React.forwardRef<HTMLElement, { 
  setHeroRect: (rect: DOMRect | null) => void;
  onScroll: (event: React.UIEvent<HTMLElement>) => void;
  onSubmit: (data: { [key: string]: string }) => Promise<void>;
}>(({ setHeroRect, onScroll, onSubmit }, ref) => {    
    return (
        <main ref={ref} onScroll={onScroll} className="h-screen overflow-y-auto no-scrollbar pb-16">
            <Hero setHeroRect={setHeroRect} />
            <Suspense fallback={<Loader />}>
                <Container>
                    <WedgeComparison />
                    <CaseStudies />
                    <ProblemSolution />
                    <About />
                    <ServiceModules />
                </Container>
                <Container>
                    <Investment />
                    <FitCheck />
                    <FinalCTA onSubmit={onSubmit} />
                </Container>
            </Suspense>
        </main>
    );
});
MainContent.displayName = 'MainContent';


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [view, setView] = useState<View>('main');
  const [applicantName, setApplicantName] = useState('');
  const [heroRect, setHeroRect] = useState<DOMRect | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const lastScrollTop = useRef(0);
  const mainRef = useRef<HTMLElement>(null);
  const previousView = useRef<View>(view);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    // Scroll to top when view changes, except for the initial load
    if (view !== previousView.current) {
        const container = view === 'main' ? mainRef.current : window;
        container?.scrollTo({ top: 0, behavior: 'auto' });
    }
    previousView.current = view;
  }, [view]);
  
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown') && view === 'main') {
        setShowExitPopup(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [view]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    const st = e.currentTarget.scrollTop;

    if (!hasScrolled && st > 50) {
      setHasScrolled(true);
    }

    const scrollHeight = e.currentTarget.scrollHeight;
    const clientHeight = e.currentTarget.clientHeight;
    
    const SCROLL_THRESHOLD = 200;
    const isAtBottom = st + clientHeight >= scrollHeight - 10;
    
    if (isAtBottom) {
      setShowFooter(true);
    } else if (st < lastScrollTop.current || st <= SCROLL_THRESHOLD) {
      // Scrolling up OR near top
      setShowFooter(false);
    } else if (st > lastScrollTop.current && st > SCROLL_THRESHOLD) {
      // Scrolling down and past threshold
      setShowFooter(true);
    }

    lastScrollTop.current = st <= 0 ? 0 : st;
  }, [hasScrolled]);
  
  /*
      ================================================================================
      === VITAL: GOOGLE SHEETS AUTOMATION SETUP (UPDATED) ============================
      ================================================================================
      
      This new version supports both the main audit form (with reCAPTCHA) and the new 
      exit-intent popup form. You MUST update your Google Apps Script.

      --- INSTRUCTIONS ---
      
      1.  **Create Two Google Sheets (or Tabs):**
          - Go to sheets.new. Name it "ViziGrowth Leads".
          - Create two tabs at the bottom:
            - One named "Audit Submissions"
            - One named "PDF Signups"
          - **Audit Submissions Headers:** `timestamp`, `full-name`, `email`, `website-url`, `biggest-problem`, `consent`
          - **PDF Signups Headers:** `timestamp`, `email`

      2.  **Get reCAPTCHA Keys:**
          - Go to the Google reCAPTCHA Admin Console: https://www.google.com/recaptcha/admin
          - Create a new site.
          - Choose **reCAPTCHA v2** -> **"I'm not a robot" Checkbox**.
          - Add your domain.
          - After creation, you'll get a **Site Key** and a **Secret Key**.
            - The Site Key is public. Replace the placeholder in `FinalCTA.tsx`.
            - The Secret Key is private. **KEEP IT SAFE.** You'll paste it into the script below.

      3.  **Update Apps Script:**
          - In your sheet, go to "Extensions" > "Apps Script".
          - Delete any content in `Code.gs` and paste the ENTIRE code block below:

          ----------------------------------------------------------------------------
          // --- CONFIGURATION ---
          const AUDIT_SHEET_NAME = 'Audit Submissions';
          const PDF_SHEET_NAME = 'PDF Signups';
          // --- IMPORTANT: PASTE YOUR SECRET KEY HERE ---
          const RECAPTCHA_SECRET = 'YOUR_GOOGLE_RECAPTCHA_SECRET_KEY';

          function verifyRecaptcha(token) {
            if (!token) return false;
            try {
              const response = UrlFetchApp.fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                payload: {
                  secret: RECAPTCHA_SECRET,
                  response: token
                }
              });
              const result = JSON.parse(response.getContentText());
              return result.success;
            } catch (e) {
              Logger.log('reCAPTCHA verification failed: ' + e.toString());
              return false;
            }
          }

          function writeToSheet(sheetName, headers, parameters) {
            const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
            if (!sheet) {
              // If the sheet doesn't exist, create it.
              sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
            }

            if (sheet.getLastRow() === 0) {
              sheet.appendRow(headers);
            }
            const newRow = headers.map(header => parameters[header] || '');
            sheet.appendRow(newRow);
          }

          function doPost(e) {
            try {
              const submissionType = e.parameter.type;
              
              if (submissionType === 'pdf_signup') {
                const headers = ['timestamp', 'email'];
                writeToSheet(PDF_SHEET_NAME, headers, e.parameter);

              } else if (submissionType === 'audit_request') {
                if (RECAPTCHA_SECRET === 'YOUR_GOOGLE_RECAPTCHA_SECRET_KEY') {
                   throw new Error("reCAPTCHA Secret Key is not set in the script.");
                }
                const isHuman = verifyRecaptcha(e.parameter['g-recaptcha-response']);
                if (!isHuman) {
                  throw new Error("reCAPTCHA verification failed.");
                }
                const headers = ['timestamp', 'full-name', 'email', 'website-url', 'biggest-problem', 'consent'];
                writeToSheet(AUDIT_SHEET_NAME, headers, e.parameter);
                
              } else {
                throw new Error("Invalid submission type.");
              }

              return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);

            } catch (error) {
              Logger.log(error);
              return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
            }
          }
          ----------------------------------------------------------------------------

      4.  **Deploy the Script:**
          - Click "Deploy" > "New deployment".
          - **Type:** Web app.
          - **Execute as:** Me.
          - **Who has access:** Anyone.
          - Click "Deploy", authorize it, and copy the new Web app URL.

      5.  **Update Your Code:**
          - Paste the new URL into the `SCRIPT_URL` constant below.
    */
  const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
  
  const handleFormSubmit = async (formData: { [key: string]: string }) => {
    if (SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        console.error("CRITICAL: You must set your Google Apps Script URL in App.tsx for the form to work.");
        alert("Form submission is not configured. Please contact the site administrator.");
        return;
    }

    const scriptFormData = new FormData();
    for (const key in formData) {
      scriptFormData.append(key, formData[key]);
    }
    scriptFormData.append('timestamp', new Date().toISOString());
    scriptFormData.append('type', 'audit_request');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: scriptFormData,
        mode: 'no-cors',
      });
      setApplicantName(formData['full-name']?.split(' ')[0] || '');
      setView('thankyou');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error submitting your request. Please try again later or contact us directly.");
      throw error;
    }
  };
  
  const handlePdfSignupSubmit = async (email: string) => {
    if (SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        alert("Form submission is not configured.");
        throw new Error("Script URL not configured.");
    }

    const scriptFormData = new FormData();
    scriptFormData.append('email', email);
    scriptFormData.append('timestamp', new Date().toISOString());
    scriptFormData.append('type', 'pdf_signup');
    
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: scriptFormData,
            mode: 'no-cors',
        });
    } catch (error) {
        console.error("Error submitting PDF signup:", error);
        alert("Sorry, there was an error with your request. Please try again.");
        throw error;
    }
  };


  const renderView = () => {
    switch(view) {
        case 'main':
            return <MainContent ref={mainRef} setHeroRect={setHeroRect} onScroll={handleScroll} onSubmit={handleFormSubmit} />;
        case 'privacy':
            return <PrivacyPolicy onBack={() => setView('main')} />;
        case 'faq':
            return <FaqPage onBack={() => setView('main')} />;
        case 'thankyou':
            return <ThankYouPage applicantName={applicantName} onBack={() => setView('main')} />;
        default:
            return <MainContent ref={mainRef} setHeroRect={setHeroRect} onScroll={handleScroll} onSubmit={handleFormSubmit} />;
    }
  };

  return (
    <>
      <InteractiveBackground theme={theme} heroRect={heroRect} />
      <Header theme={theme} toggleTheme={toggleTheme} view={view} setView={setView} mainRef={mainRef} />
      
      <Suspense fallback={<Loader />}>
        {renderView()}
      </Suspense>
      
      <AnimatePresence>
        {showFooter && view === 'main' && <Footer setView={setView} mainRef={mainRef} />}
      </AnimatePresence>
      <AnimatePresence>
        {showExitPopup && (
            <Suspense>
                <ExitIntentPopup 
                    onClose={() => setShowExitPopup(false)}
                    onSubmit={handlePdfSignupSubmit} 
                />
            </Suspense>
        )}
      </AnimatePresence>
      {hasScrolled && view === 'main' && <Chatbot />}
    </>
  );
};

export default App;