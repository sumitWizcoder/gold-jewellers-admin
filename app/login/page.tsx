import LoginForm from "@/components/form/LoginForm";

const page = () => {
  return (
    <section className="section py-10 md:py-20 min-h-screen flex items-center bg-[var(--bg)] text-[var(--text)]">
      <div className="container mx-auto">
        <div className="max-w-md p-6 bg-[var(--alt-bg)] rounded-lg border mx-auto">
          <div>
            <p className="uppercase text-sm mb-2 text-[var(--primary)]">Login</p>
            <h2 className="text-4xl font-heading font-bold mb-6 text-[var(--heading)]">
              Welcome back
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default page;
