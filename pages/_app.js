import Layout from '../components/Layout/Layout';

import '../styles/globals.scss';

function App({ Component, pageProps }) {
    return <Layout Page={Component} props={pageProps} />;
}

export default App;
