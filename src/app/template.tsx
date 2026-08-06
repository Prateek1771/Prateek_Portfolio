// Next remounts template.tsx on every navigation, which is exactly the hook a
// route transition needs — no pathname listener, no client component, no
// framer-motion wrapper. The animation itself is .page-in in globals.css.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
