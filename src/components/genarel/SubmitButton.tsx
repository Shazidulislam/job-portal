"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { Span } from "next/dist/trace";

interface SignInSubmitButtonProps {
  text: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
   width :string;
   icon:ReactNode
    
}

export default function SubmitButton({
  variant,
  width,
  text,
  icon
}: SignInSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button variant={variant} className={`${width}`} disabled={pending}>
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          <span>Submitting....</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
            {icon&& <div className="">{icon}</div> }
            <span>{text}</span>
       </div>
      )}
    </Button>
  );
}
