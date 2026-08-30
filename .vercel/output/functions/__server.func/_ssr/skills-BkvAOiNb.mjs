import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, r as PageTitle, t as AiFlag } from "./mark-CG5GOUAq.mjs";
import { r as skills, t as edaStart } from "./skills-Cb8lXSih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-BkvAOiNb.js
var import_jsx_runtime = require_jsx_runtime();
var kinds = [
	{
		id: "eda",
		label: "EDA & tools"
	},
	{
		id: "lang",
		label: "Languages"
	},
	{
		id: "stack",
		label: "Stacks"
	},
	{
		id: "theory",
		label: "Theory you must feel"
	},
	{
		id: "lab",
		label: "Lab"
	},
	{
		id: "soft",
		label: "Adult skills"
	}
];
function SkillsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "Start with free tools",
				title: "EDA, languages, and the skills college will not stamp",
				lede: "You do not need Cadence on day one. You need KiCad, LTspice, Verilator, a scope, and git. Industry tools come when a team hands you a license. AI is labelled on every skill — easy means do not build your identity on it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Install these this week"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: edaStart.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: e.use
						})]
					}, e.name))
				})]
			}),
			kinds.map((k) => {
				const list = skills.filter((s) => s.kind === k.id);
				if (!list.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: k.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiFlag, { level: s.ai })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-subtle",
								children: s.aiNote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: "Start · "
								}), s.start]
							})
						] }, s.id))
					})]
				}, k.id);
			})
		]
	});
}
//#endregion
export { SkillsPage as component };
