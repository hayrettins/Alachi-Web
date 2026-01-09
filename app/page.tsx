import { redirect } from 'next/navigation';

// In static export mode, we can't use middleware for root redirection in dev nicely,
// and in prod we rely on host config. This is a fallback content for the root.
export default function RootPage() {
    redirect('/en');
}
