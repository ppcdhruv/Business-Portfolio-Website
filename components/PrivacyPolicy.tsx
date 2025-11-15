import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-16 pt-24 bg-white dark:bg-stone-950">
        <Container>
            <div className="max-w-4xl mx-auto prose prose-stone dark:prose-invert">
                <h1>Privacy Policy for ViziGrowth</h1>

                <p><strong>Last Updated:</strong> August 2, 2024</p>
                
                <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make an inquiry through vizigrowth.com (the “Site”).</p>

                <h2>Personal Information We Collect</h2>
                <p>When you submit an inquiry through the form on our Site, we collect certain information from you, including your name, email address, website URL, and your description of your business needs. We refer to this information as “Application Information.”</p>
                
                <h2>How Do We Use Your Personal Information?</h2>
                <p>We use the Application Information that we collect generally to communicate with you and to screen applications for potential risks or fraud. When in line with the preferences you have shared with us, we provide you with information relating to our products or services.</p>

                <h2>Sharing Your Personal Information</h2>
                <p>We do not share, sell, rent, or trade your Personal Information with third parties for their commercial purposes.</p>

                <h2>GDPR Compliance</h2>
                <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.</p>
                <ul>
                    <li><strong>Right of Access:</strong> You have the right to access the information we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
                    <li><strong>Right to Erasure:</strong> You have the right to have your personal information deleted.</li>
                </ul>

                <h2>Data Retention</h2>
                <p>When you submit an application through the Site, we will maintain your Application Information for our records unless and until you ask us to delete this information.</p>

                <h2>Changes</h2>
                <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                
                <h2>Contact Us</h2>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@vizigrowth.com.</p>

                <div className="not-prose mt-12 text-center">
                    <Button onClick={onBack}>Back to Site</Button>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default PrivacyPolicy;