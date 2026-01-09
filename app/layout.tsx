// Since we have a [locale] layout, this root layout is only used for
// the root 404 page or redirection. It passes control to children (which define html/body).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
