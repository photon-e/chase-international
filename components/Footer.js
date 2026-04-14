const deploymentId =
  process.env.COMMIT_REF ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_ID ||
  'local';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-extrabold tracking-wide text-secondary">CHASE N. INTERNATIONAL CO. LTD</p>
          <p className="mt-1 text-xs text-slate-500">General Contracts • Supplies • Construction • Trading</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-1 text-xs text-slate-400">Deploy: {deploymentId.slice(0, 8)}</p>
        </div>
      </div>
    </footer>
  );
}
