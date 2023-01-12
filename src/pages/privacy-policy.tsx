import React from 'react';
import Layout from '@theme/Layout';
import {PrivacyPolicy} from '@site/src/components/PrivacyPolicy';

export default function Home(): JSX.Element {
    return (
        <Layout
            title={`Privacy Policy`}
            description="The privacy policy of xpipe.io">
            <main>
                <PrivacyPolicy/>
            </main>
        </Layout>
    );
}
