import type { WorkGroup } from "./types";
import { projects } from "./projects";
import { experience } from "./experience";

/**
 * Projects lead: they carry the on-target data-engineering proof.
 * Experience follows, strictly reverse-chronological.
 */
export const workGroups: WorkGroup[] = [
  { label: "Selected Projects", entries: projects },
  { label: "Experience", entries: experience },
];
