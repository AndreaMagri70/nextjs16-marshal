"use client";

import { signUpSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
import z from "zod";

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Create an account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <FieldGroup>
          <Controller 
            name="name" 
            control={form.control} 
            render={( {field, fieldState }) => (
              <Field>
                <FieldLabel>Full Name</FieldLabel>
                <Input placeholder="Jhon Doe" {...field}/>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
               
              </Field>
            )} />
            <Controller 
            name="email" 
            control={form.control} 
            render={( {field, fieldState }) => (
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input placeholder="john@doe.net" {...field}/>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
               
              </Field>
            )} />
            <Controller 
            name="password" 
            control={form.control} 
            render={( {field, fieldState }) => (
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input placeholder="*****" type="password" {...field}/>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
               
              </Field>
            )} />
          </FieldGroup>
          
        </form>
      </CardContent>
    </Card>
  );
}