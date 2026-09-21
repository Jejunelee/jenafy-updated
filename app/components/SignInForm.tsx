import Link from "next/link";
import TraceButton from "@/app/components/motion/TraceButton";
import TraceType from "@/app/components/motion/TraceType";
import { continueToDashboard } from "@/app/signin/actions";

export default function SignInForm({ pending }: { pending: boolean }) {
  return (
    <div className="signin-card">
      <p className="pane-kicker">Existing client</p>
      <TraceType as="h1">Welcome back bestie.</TraceType>
      <p className="signin-lead">
        Log in to the analytics dashboard made for your digital product.
      </p>

      {pending ? (
        <p className="signin-note" role="status">
          Nothing was stored. The client dashboard is not live yet; this is the
          sign-in you&apos;ll use when it is.
        </p>
      ) : (
        <form className="signin-form" action={continueToDashboard}>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="username"
              required
              placeholder="you@company.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
            />
          </label>
          <TraceButton type="submit">Log in</TraceButton>
        </form>
      )}

      <p className="signin-alt">
        New here? <Link href="/home">See the studio</Link>
        {" · "}
        <Link href="/">Choose again</Link>
      </p>
    </div>
  );
}
