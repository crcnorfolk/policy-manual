# CrossRoads Church Policy Manual

The source of the CrossRoads Church policy manual, published at
[policies.crcnorfolk.com](https://policies.crcnorfolk.com).

Every policy is a Markdown file in `src/content/docs/policy/`. The block at the top of
each file records when the policy takes effect, who approved it, when, and what it
replaces. That block is the point of this repository.

## If you only want to fix or add a policy

You do not need to install anything. See
[How to edit a policy](https://policies.crcnorfolk.com/how-to-edit/).

Start a new policy by copying [POLICY-TEMPLATE.md](POLICY-TEMPLATE.md).

## If you are maintaining the site

Requires Node 22 or later.

```sh
npm install
npm run dev      # local preview at localhost:4321
npm run build    # production build into dist/
```

Pushing to `main` builds and deploys automatically through GitHub Actions. The workflow
is in `.github/workflows/deploy.yml`.

Built with [Astro Starlight](https://starlight.astro.build). The governance block under
each policy title is rendered by `src/components/PageTitle.astro`, and the fields it
reads are defined in `src/content.config.ts`.

## Why it is built this way

The content is plain Markdown in a public git repository, owned by the church rather
than by an individual. If this website stops being maintained, the policies are still
readable as text files and the full history of every change is still public. The
publishing layer is replaceable. The repository is the thing worth keeping.
