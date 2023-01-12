import React from 'react';
import Layout from '@theme/Layout';
import Imprint from "@site/src/components/Imprint";

export default function Home(): JSX.Element {
    return (
        <Layout
            title={`Imprint`}
            description="The imprint of xpipe.io">
            <main>
                <Imprint/>
            </main>
        </Layout>
    );
}
