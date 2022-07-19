import Layout from "@/layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps}></Component>
			</Layout>
		</RecoilRoot>
	);
};

export default MyApp;

