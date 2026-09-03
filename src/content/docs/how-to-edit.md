---
title: How to edit a policy
description: Step by step instructions for correcting or adding a policy, written for someone who has never used GitHub.
---

You do not need to be technical to change a policy on this site. You need a free GitHub account and permission from whoever administers the CrossRoads Church GitHub organization.

Everything below happens in a web browser. Nothing is installed.

## Correcting an existing policy

1. Open the policy you want to change on this site.
2. Scroll to the bottom and click **Edit page**. This opens the policy's text on GitHub.
3. If you are asked to sign in, sign in.
4. Edit the text. The formatting is Markdown, which is mostly plain typing. A line starting with `##` is a heading. A line starting with `-` is a bullet. That is nearly all of it.
5. Click **Commit changes** at the top right.
6. In the box that appears, write one sentence saying what you changed and why. This sentence becomes part of the permanent record, so write it for someone reading it in five years.
7. Click **Commit changes** again.

The site rebuilds itself within about two minutes. Refresh the page and your change is live.

## The part at the top of the file

Every policy starts with a block of lines between two rows of dashes. That block is the governance record, and it is the reason this manual exists. It looks like this.

```
---
title: Building Use
policy_number: "6.01"
status: approved
effective: 2026-10-01
approved_by: Elder Board
approved_on: 2026-09-15
supersedes: 6.01 version of 2024-03-02
minutes: Elder Board minutes, 2026-09-15
review_cycle: Annually
---
```

Two rules about that block.

**Never change an approval date or an approving body to something the board did not decide.** Those fields are a record of what happened, not a description of what the policy says. If the board has not approved a change, the change is a draft.

**Set `status: draft` while you are working on a revision the board has not seen.** A policy marked draft shows a notice saying it is not in force. That is the honest state of an unapproved edit.

## Adding a new policy

1. Go to the [policy folder on GitHub](https://github.com/crcnorfolk/policy-manual/tree/main/src/content/docs/policy).
2. Click **Add file**, then **Create new file**.
3. Name the file with its policy number and a short description, all lowercase, with dashes instead of spaces, ending in `.md`. For example `6-01-building-use.md`. This name becomes the web address and should never change afterwards.
4. Copy the whole contents of [POLICY-TEMPLATE.md](https://github.com/crcnorfolk/policy-manual/blob/main/POLICY-TEMPLATE.md) into the file and fill it in.
5. Set the `order` line so the policy lands in the right place. **The list on the left is in alphabetical order by title, not by policy number.** Find the two policies your new one belongs between alphabetically, and give it a number between theirs. They are spaced ten apart so there is always room.
6. Commit the change the same way as above.

## Undoing a mistake

Nothing here can be permanently broken. Every version of every policy is kept forever. Open the policy, click **View revision history**, find the version you want, and it can be restored.

If something looks wrong and you are not sure how to fix it, leave it and ask for help. A wrong policy on the site for a day is a smaller problem than a confused fix.

## Who can help

The CrossRoads Church GitHub organization should always have at least two owners, so that no single person is the only one who can grant access. If you are reading this because the person who built this site is no longer available, any web developer can pick it up. The whole manual is plain text files in a public repository at [github.com/crcnorfolk/policy-manual](https://github.com/crcnorfolk/policy-manual), and the content is readable with or without this website.
