import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Bookmark } from "../_libs/lucide-react.mjs";
import { c as cn, i as trackById, o as useTrace, r as Route$2, s as Button } from "./router-DnV27_4v.mjs";
import { n as companyById, t as companies } from "./companies-BcG1QiD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companies._id-CDPjoWDQ.js
var import_jsx_runtime = require_jsx_runtime();
function CompanyDetail() {
	const { id } = Route$2.useParams();
	const c = companyById[id];
	if (!c) throw notFound();
	const saved = useTrace((s) => s.saved).includes(c.id);
	const toggleSaved = useTrace((s) => s.toggleSaved);
	const related = companies.filter((x) => x.id !== c.id && x.sectors.some((s) => c.sectors.includes(s))).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
					kicker: `${c.city} · ${c.kind}`,
					title: c.name,
					lede: c.founders ? `Founded / co-founded by ${c.founders}.` : c.blurb
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: saved ? "secondary" : "default",
					onClick: () => toggleSaved(c.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-current") }), saved ? "Saved" : "Save"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-muted",
				children: c.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: c.sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "accent",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "What they actually build"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: c.build
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "How an intern gets in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: c.how
					}),
					c.stipend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-accent",
						children: c.stipend
					}) : null
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Roles that fit an EE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: c.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: r }) }, r))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
					children: "Skills they want"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1 text-sm text-muted",
					children: c.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Fields this maps to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: c.tracks.map((tid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tracks/$id",
						params: { id: tid },
						className: "rounded-full px-3 py-2 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg",
						children: trackById[tid].name
					}, tid))
				})]
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Nearby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: related.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/companies/$id",
						params: { id: x.id },
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: x.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: x.blurb
						})]
					}, x.id))
				})]
			}) : null
		]
	});
}
//#endregion
export { CompanyDetail as component };
