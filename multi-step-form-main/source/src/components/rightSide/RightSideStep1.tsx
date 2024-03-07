import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  setStep: (no: number) => void;
};

const RightSideStep1 = ({ setStep }: Props) => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
  );

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Invalid Username",
    }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    phoneNumber: z.string().regex(phoneRegex, "Invalid Number!"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = () => {};

  return (
    <div className="col-span-2 flex flex-col justify-between px-16 py-8">
      <div>
        <h1 className="text-3xl font-bold text-[#02295a]">Personal info</h1>
        <p className="mt-1 text-sm font-light text-gray-400">
          Please provide your name, email, and phone number
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>
                    <span className="text-xs text-[#02295a]">Name</span>
                  </FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g Stephen King"
                    {...field}
                    className="outline-[#02295a] ring-[#02295a]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <div className="flex items-center justify-between">
                  <FormLabel>
                    <span className="text-xs text-[#02295a]">
                      Email Address
                    </span>
                  </FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input placeholder="e.g stephenking@lorem.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <div className="flex items-center justify-between">
                  <FormLabel>
                    <span className="text-xs text-[#02295a]">Phone Number</span>
                  </FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input placeholder="e.g +1 234 567 890" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-end justify-end">
            <Button
              onClick={() => setStep(2)}
              type="submit"
              className="mt-20 bg-[#02295a] text-right"
            >
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RightSideStep1;
