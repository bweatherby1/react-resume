import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// You can manage the metadata, tab content, and info about your app dynamically using this. It will work on every page in your app:
export const generateMetadata = async ({ params }) => {
  // Destructure parameters or fetch necessary data here
  const { slug } = params; // Example of accessing dynamic route params

  return {
    title: `TEMPLATE - ${slug || 'HOME'}`, // Dynamically set the title using route parameters
    description: `This is a dynamically generated description for ${slug}.`, // Dynamic description
    // Add other metadata fields as needed, like keywords, open graph tags, etc.
    keywords: [`${slug}`, 'dynamic', 'page'],
    openGraph: {
      title: `Open Graph Title for ${slug}`,
      description: `Open Graph Description for ${slug}`,
      url: `https://yourwebsite.com/${slug}`,
    },
  };
};
