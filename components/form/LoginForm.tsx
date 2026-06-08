import Input from "./Input";
const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-(--body-color)"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border border-(--stroke-two) bg-(--tag-bg) px-4 py-3 text-(--body-color)  "
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-(--body-color)"
        >
          Password
        </label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded-md border border-(--stroke-two) bg-(--tag-bg) px-4 py-3 text-(--body-color)  "
        />
      </div>
      <div>
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center">
            <Input type="checkbox" />
            <label className="ml-2">Remember this device</label>
          </div>
          <a className="font-semibold text-(--primary)">Forgot password? →</a>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-(--primary) px-4 py-3 font-semibold text-white transition duration-300 cursor-pointer hover:bg-(--hover-color)"
      >
        Sign In to Dashboard
      </button>
    </form>
  );
};

export default LoginForm;
