import { Wallet } from "lucide-react";
import { paymentMethods } from "../data/paymentMethods";

export default function PaymentMethods({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3 text-sm text-muted ${className}`}>
      {paymentMethods.map((method) => (
        <li key={method.id} className="flex items-start gap-2">
          <Wallet size={16} className="mt-0.5 shrink-0" />
          <div>
            <span className="font-semibold text-foreground">{method.provider}</span>
            {" — "}
            {method.link ? (
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {method.handle}
              </a>
            ) : (
              <span>{method.handle}</span>
            )}
            <span className="block text-xs text-muted">
              {method.accountName}
              {method.note ? ` · ${method.note}` : ""}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
