import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import LeftBar from '../leftBar';

const MainLayout = ({ children, title }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>{title}</title>
            </Head>
            <div className="page">
                <Header />
                <LeftBar />
                <main className="main">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;