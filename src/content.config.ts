import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The governance fields. Every policy carries these, and they are the reason
// this manual exists. Adding a field here makes it available to
// src/components/PageTitle.astro, which renders the block readers see.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // "4.02" style. Permanent. Never reused, never renumbered.
        policy_number: z.string().optional(),
        // draft   - written, not yet approved. Not in force.
        // approved - approved by the body named below. In force.
        // retired  - no longer in force. Kept for the record.
        status: z.enum(['draft', 'approved', 'retired']).default('draft'),
        // The date the policy takes effect. May be later than the approval date.
        effective: z.coerce.date().optional(),
        // The body that approved it, e.g. "Elder Board".
        approved_by: z.string().optional(),
        approved_on: z.coerce.date().optional(),
        // What this replaces, e.g. "4.02 version of 2024-03-02".
        supersedes: z.string().optional(),
        // Citation to the minutes recording the approval. The minutes are the
        // governance record. This site displays it, it does not replace it.
        minutes: z.string().optional(),
        // When this should next be looked at, e.g. "Annually" or "2028-09".
        review_cycle: z.string().optional(),
        // Date the policy left force. Only for status: retired.
        retired_on: z.coerce.date().optional(),
      }),
    }),
  }),
};
