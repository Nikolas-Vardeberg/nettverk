

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { PreviewBanner } from "../../components/preview/PreviewBanner";

export default function App({ Component, pageProps }: AppProps) {
    const { route } = useRouter()
    const isSanityStudio = route.startsWith("/studio")

    return(
        <>
        {!isSanityStudio && (
            <Head>
                <title>nettverk</title>
            </Head>
        )}

        {pageProps?.preview && <PreviewBanner />}

        <Component {...pageProps} />
        </>
    )
}