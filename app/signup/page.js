import Dashboard from '@/components/Dashboard';
import Signup from '@/components/Signup';
import Main from "@/components/Main";

export default function page() {
    const isAunthenticated = false;

    let children = <Signup />;
  
    if (isAunthenticated) {
      children = <Dashboard />;
    }
  
    return <Main>{children}</Main>;
}
