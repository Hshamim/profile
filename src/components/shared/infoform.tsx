"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { createInfo } from "@/lib/actions/data.action";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"


const type = 'create';
const formSchema = z.object({
  FirstName: z.string().min(2, {
    message: "FirstName must be at least 2 characters.",
  }),
  LastName: z.string().min(2, {
    message: "LastName must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  // phone: z.string().regex(/^\d{10}$/,{message: "Invalid email address"}),
  phone: z.string().min(10, {
    message: "phone must be at least 10 characters.",
  }),
  gender: z.enum(["male", "female",], {
    required_error: "You need to select a notification type.",
  }),
  description: z.string().min(50, {
    message: "Description must be at least 50 characters.",
  }),
})




function InfoForm() {
    // 1. Define your form.
    
    
    const [isSubmiting, setSubmiting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          FirstName: "",
          LastName:"",
          email:"",
          phone:"",
        },
    })
    const router = useRouter();


  // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
      
      setSubmiting(true);
      console.log(values)
      

      try{
        await createInfo({
          FirstName : values.FirstName,
          LastName : values.LastName,
          email : values.email,
          phone : values.phone,
          gender : values.gender,
          description: values.description,
        })
        
        router.push('/')
        
      }catch(error){
        console.log(error)
      }finally{
        setSubmiting(false);
      }     
       
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10">
            <div className="flex gap-5">
              <FormField control={form.control}
                name="FirstName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" font-bold">First name</FormLabel><span className="text-red-500">*</span>
                    <FormControl className="">
                      <Input placeholder="Name" {...field}  className=" bg-gray-400 h-[50px] focus:ring-0"/>
                    </FormControl>
                    <FormMessage className=" text-red-500" />
                  </FormItem>
                  
                )}
              />
              <FormField control={form.control}
                name="LastName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" font-bold">Last name</FormLabel><span className="text-red-500">*</span>
                    <FormControl className="">
                      <Input placeholder="Last name" {...field}  className=" bg-gray-400 h-[50px] focus:ring-0"/>
                    </FormControl>
                    <FormMessage className=" text-red-500" />
                  </FormItem>
                  
                )}
            />
            </div>
            <div className="flex gap-5">
            <FormField control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" font-bold">E-mail</FormLabel><span className="text-red-500">*</span>
                    <FormControl className="">
                      <Input placeholder="email" {...field}  className=" bg-gray-400 h-[50px] focus:ring-0"/>
                    </FormControl>
                    <FormMessage className=" text-red-500" />
                  </FormItem>
                  
                )}
              />
              <FormField control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" font-bold">Phone number</FormLabel><span className="text-red-500">*</span>
                    <FormControl className="">
                      <Input placeholder="Phone" {...field}  className=" bg-gray-400 h-[50px] focus:ring-0"/>
                    </FormControl>
                    <FormMessage className=" text-red-500" />
                  </FormItem>
                  
                )}
            />
            </div>
            <div className=" mt-2">
            <FormField control={form.control}
                name="gender"
                render={({ field }) => (
                  <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
                  
                )}
            />



                
            </div>
            <div>
            <FormField control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className=" font-bold">Description</FormLabel><span className="text-red-500">*</span>
                    <FormControl className="">
                      <Textarea placeholder="description" {...field}  className=" bg-gray-400 h-[50px] focus:ring-0"/>
                    </FormControl>
                    <FormMessage className=" text-red-500" />
                  </FormItem>
                  
                )}
              />
            </div>
            <Button type="submit" className=" mt-3 w-full" disabled={isSubmiting}>
                Submit
            </Button>
          </form>
        </Form>
    )
}

export default InfoForm