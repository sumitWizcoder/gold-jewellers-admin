
import Input from "./Input";

const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-[var(--text)]"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)]"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-[var(--text)]"
        >
          Password
        </label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded-md border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[var(--primary)] px-4 py-3 font-semibold text-white transition hover:bg-[var(--hover-color)]"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
