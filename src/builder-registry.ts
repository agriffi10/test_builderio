"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Divider from "./components/Divider/Divider";
import HomeSection from "./components/TitledSection/TitledSection";
import JobCard from "./components/JobCard/JobCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(JobCard, {
  name: "Job Card",
  inputs: [
    {
      name: "company",
      type: "string",
      required: true,
    },
    {
      name: "end",
      type: "string",
    },
    {
      name: "isCurrent",
      type: "boolean",
      required: true,
    },
    {
      name: "link",
      type: "string",
    },
    {
      name: "start",
      type: "string",
      required: true,
    },
    {
      name: "summary",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(HomeSection), {
  name: "Home Section",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Divider, {
  name: "Divider",
});
