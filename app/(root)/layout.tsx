import Footer from "@/components/layouts/Footer";
import MainHeader from "@/components/layouts/Header";

export interface LayoutProps {
	children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
	return <>
	<MainHeader/>
	{children}
	<Footer/>
	</>;
};

export default Layout;
