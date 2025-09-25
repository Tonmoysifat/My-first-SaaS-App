"use client"
import React from "react";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {subjects} from "@/constants";
import {createCompanion} from "@/lib/actions/companions.action";
import {redirect} from "next/navigation";

// Zod schema
const formSchema = z.object({
    name: z.string().min(1, {message: "Companion is required."}),
    subject: z.string().min(1, {message: "Subject is required."}),
    topic: z.string().min(1, {message: "Topic is required."}),
    voice: z.string().min(1, {message: "Voice is required."}),
    style: z.string().min(1, {message: "Style is required."}),
    duration: z.coerce.number().min(1, {message: "Duration is required."}),
});

// Types
type FormSchemaInput = z.input<typeof formSchema>; // raw input

const CompanionForm = () => {
    const form = useForm<FormSchemaInput>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    });

    // Submit handler: coerce duration here if needed
    const onSubmit = async (values: FormSchemaInput) => {
        // Parse values with Zod
        const parsed = formSchema.parse(values); // now duration is guaranteed number
        const companions = await createCompanion(parsed);
        if (companions) {
            redirect(`/companions/${companions.id}`);
        } else {
            console.log("Failed to create the companion");
            redirect("/");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select the subject"/>
                                    </SelectTrigger>
                                    <SelectContent className="bg-white rounded-md shadow-md">
                                        {subjects.map((subject) => (
                                            <SelectItem key={subject} value={subject}>
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="topic"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Ex. Derivates & Integrals" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="voice"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the voice"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="style"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the style"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">Formal</SelectItem>
                                        <SelectItem value="casual">Casual</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutes</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15"
                                    {...field}
                                    // Ensure only string or number is passed to input
                                    value={
                                        typeof field.value === "number" || typeof field.value === "string"
                                            ? field.value
                                            : ""
                                    }
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full cursor-pointer">
                    Build Your Companion
                </Button>
            </form>
        </Form>
    );
};

export default CompanionForm;
