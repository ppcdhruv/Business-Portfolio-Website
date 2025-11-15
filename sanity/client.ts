import sanityClient from '@sanity/client';

export const client = sanityClient({
  // ===================================================================
  // IMPORTANT:
  // YOU MUST REPLACE 'your-project-id' WITH YOUR ACTUAL SANITY PROJECT ID.
  //
  // How to find your Project ID:
  // 1. Go to https://www.sanity.io/manage
  // 2. Click on your project (e.g., "ViziGrowth Website").
  // 3. Your Project ID will be displayed on the project dashboard.
  //
  // Your app will not work until you do this!
  // ===================================================================
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-08-02', // use a UTC date in YYYY-MM-DD format
  useCdn: true, // `false` if you want to ensure fresh data
});