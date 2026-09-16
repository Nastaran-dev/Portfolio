import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { redHatDisplay } from "@/assets/fonts/JosefinSans/fonts";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 font-sans tracking-wider capitalize ",
  {
    variants: {
      variant: {
        default:
          "bg-primary-gradient text-primary-foreground hover:bg-primary-gradient/80",
        secondary:
          "bg-secondary-dark text-primary-foreground hover:bg-secondary-dark/80",
        accent:
          "bg-primary-gradient text-primary-foreground hover:bg-primary-gradient/80",
      },
      size: {
        default:
          "h-8 gap-1.5 px-md py-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 rounded-xl text-lg ",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8 rounded-full",
        "icon-xs": "size-6 rounded-full",
        "icon-sm": "size-7 rounded-full",
        "icon-lg": "size-24 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        redHatDisplay.variable,
        buttonVariants({ variant, size, className }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
