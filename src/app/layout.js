import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/bootstrapclient";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

export default Layout;