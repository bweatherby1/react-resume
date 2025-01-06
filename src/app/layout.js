import PropTypes from 'prop-types';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  return {
    title: `TEMPLATE - ${slug || 'HOME'}`,
    description: `This is a dynamically generated description for ${slug}.`,
    keywords: [`${slug}`, 'dynamic', 'page'],
    openGraph: {
      title: `Open Graph Title for ${slug}`,
      description: `Open Graph Description for ${slug}`,
      url: `https://yourwebsite.com/${slug}`,
    },
  };
};
