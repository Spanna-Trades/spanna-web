"use client";

import Field from "@/app/elements/inputs/Field";
import Select from "@/app/elements/inputs/Select";
import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import Button from "@/app/elements/inputs/Button";

const interestedAsOptions = z.enum(["Homeowner", "Renter", "Tradesperson"], { message: "Please select an option" })
const BasicUserInfoSchema = z
  .object({
    name: z.string().min(1, { message: 'Please enter your name or the name of your business' }),
    email: z.email({ message: 'Please enter a valid email address' }),
    area: z.string(),
    interestedDescription: z.string(),
    suggestions: z.string(),
  })

const InterestFormSchema = z.discriminatedUnion('interestedAs', [
  z.object({
    ...BasicUserInfoSchema.shape,
    interestedAs: interestedAsOptions.extract(["Homeowner", "Renter"], { message: "Please select an option" }),
  }),
  z.object({
    ...BasicUserInfoSchema.shape,
    interestedAs: interestedAsOptions.extract(["Tradesperson"], { message: "Please select an option" }),
    trade: z.enum(["Electrician", "Plumber", "Both"], { message: "Please select an option" }),
    yearsInTrade: z.coerce.number({ message: "Please enter number of years in trade" }).gt(0),
  }),
])

type InterestFormSchemaType = z.infer<typeof InterestFormSchema>

const InterestForm = () => {
  const [formSubmissionError, setFormSubmissionError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InterestFormSchemaType>({
    resolver: zodResolver(InterestFormSchema),
  })
  const interestedAs = watch("interestedAs");

  const onSubmit: SubmitHandler<InterestFormSchemaType> = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "text/html",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          ...data,
          "access_key": "6af7bba7-fc2d-4e72-9aaa-228ba6d1cbb0"
        })
      });
      const responseData = await response.json();
      console.log("responseData: ", responseData);
      if (responseData.success) {
        reset();
      } else {
        throw new Error("Form failed to submit. Please try again later.")
      }
    } catch (error: unknown) {
      setFormSubmissionError(error as string);
    }
  };
  console.log(errors);

  return (
    <Section id="interest" background="paper">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          subheading="Get notified"
          heading="Be first to know when we go live"
          description="We&apos;re building in Gauteng right now. Tell us who you are and we&apos;ll keep you posted on everything that matters."
        />
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Field id="name" label="Name or Business Name*" placeholder="Your name" wrapperClasses="flex-1" {...register("name", { required: true })} errorMessage={errors.name?.message} />
              <Field id="email" label="Email*" type="email" placeholder="you@example.com" wrapperClasses="flex-1" {...register("email", { required: true })} errorMessage={errors.email?.message} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Field id="area" label="Area (optional)" placeholder="e.g. Sandton, Midrand, Centurion" wrapperClasses="flex-1"  {...register("area")} errorMessage={errors.area?.message} />
              <Select
                id="interestedAs"
                label="Interested As*"
                defaultOptionLabel="Are you a resident or a tradesperson?"
                options={["Homeowner", "Renter", "Tradesperson"]}
                wrapperClasses="flex-1"
                {...register("interestedAs", { required: true })}
                errorMessage={errors.interestedAs?.message}
              />
            </div>
            {interestedAs === "Tradesperson" && (
              <>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select id="trade" label="Trade" defaultOptionLabel="Select your trade" options={["Electrician", "Plumber", "Both"]} wrapperClasses="flex-1" {...register("trade")} errorMessage={errors.trade?.message} />
                  <Field id="yearsInTrade" type="number" label="Years in your trade" placeholder="e.g. 3 years" wrapperClasses="flex-1"  {...register("yearsInTrade")} errorMessage={errors.yearsInTrade?.message} />
                </div>
                {/* <div className="mb-5 flex gap-3 rounded-2xl bg-[linear-gradient(135deg,#04143f_0%,#1a3a8f_100%)] p-4 text-white">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <div className="mb-1 text-[14px] font-bold">Exclusive sign-up bonus</div>
                    <div className="text-[12.5px] leading-5 text-[#8fb4ff]">
                      Sign up and get something special from us. Help us build what you actually want — and be first in line when we go live.
                    </div>
                  </div>
                </div> */}
              </>
            )}
            <div>
              <label htmlFor="interestedDescription" className="mb-2 block text-xs font-bold uppercase text-grey">What makes you interested in this project?</label>
              <textarea id="interestedDescription" className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-md text-ink outline-none transition focus:border-blue" {...register("interestedDescription")} />
              <p className="inline text-red-400 text-xs">{errors.interestedDescription?.message}</p>
            </div>
            <div>
              <label htmlFor="suggestions" className="mb-2 block text-xs font-bold uppercase text-grey">Do you have any suggestions for this project?</label>
              <textarea id="suggestions" className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-md text-ink outline-none transition focus:border-blue" {...register("suggestions")} />
              <p className="inline text-red-400 text-xs">{errors.suggestions?.message}</p>
            </div>
            <Button type="submit" extendedClasses="w-full">
              Keep me posted
            </Button>
            {formSubmissionError && <p className="text-red-400 text-center">There was a problem submitting this form. Please try again later.</p>}
          </form>
        </div>
      </div>
    </Section>
  )
}

export default InterestForm;