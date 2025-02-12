import Dashboard from '@/components/Dashboard';
import Main from "@/components/Main";
import Profile from '@/components/Profile';

export default function page() {
    const isAunthenticated = false;

    let children = <Profile />;

    if (isAunthenticated) {
        children = <Dashboard />;
    }

    return <Main>{children}</Main>;
}
