import LoginForm from "@/components/form/LoginForm";
import { ShieldCheck } from "lucide-react";

const page = () => {
  return (
    <section className="section py-10 md:py-20 min-h-screen flex items-center bg-(--bg) text-(--text)">
      <div className="container mx-auto">
        <div className="max-w-md p-6 bg-(--alt-bg) rounded-lg border border-(--stroke-two) mx-auto">
          <div>
            <p className="uppercase text-sm mb-2 text-(--primary)">Login</p>
            <h2 className="text-4xl font-heading font-bold mb-6 text-(--heading)">
              Welcome back
            </h2>
          </div>
          <LoginForm />
          <div className="py-3 px-4 bg-(--tag-bg) rounded-lg mt-2 flex items-start gap-2 text-xs text-(--heading)">
            <ShieldCheck className="w-4 h-4 text-(--primary) mt-1" />
            <div>
              <p>
                <strong>New to Saraf?</strong> List your store free for 14 days
                — no card.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-(--primary)">
                List my store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
