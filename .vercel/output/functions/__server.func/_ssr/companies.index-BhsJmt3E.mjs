import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Bookmark } from "../_libs/lucide-react.mjs";
import { c as cn, o as useTrace } from "./router-DnV27_4v.mjs";
import { t as companies } from "./companies-BcG1QiD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companies.index-BhsJmt3E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var sectors = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "space",
		label: "Space"
	},
	{
		id: "ev",
		label: "EV"
	},
	{
		id: "energy",
		label: "Energy"
	},
	{
		id: "silicon",
		label: "Silicon"
	},
	{
		id: "robotics",
		label: "Robotics"
	},
	{
		id: "comms",
		label: "Comms"
	},
	{
		id: "industrial",
		label: "Industrial"
	},
	{
		id: "ai",
		label: "AI"
	},
	{
		id: "defence",
		label: "Defence"
	}
];
var kinds = [
	{
		id: "all",
		label: "Any"
	},
	{
		id: "startup",
		label: "Startup"
	},
	{
		id: "mnc",
		label: "MNC"
	},
	{
		id: "psu",
		label: "PSU"
	}
];
function CompaniesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [sector, setSector] = (0, import_react.useState)("all");
	const [kind, setKind] = (0, import_react.useState)("all");
	const saved = useTrace((s) => s.saved);
	const toggleSaved = useTrace((s) => s.toggleSaved);
	const trackId = useTrace((s) => s.trackId);
	const list = (0, import_react.useMemo)(() => {
		return companies.filter((c) => {
			if (kind !== "all" && c.kind !== kind) return false;
			if (sector !== "all" && !c.sectors.includes(sector)) return false;
			if (q.trim()) {
				if (!`${c.name} ${c.city} ${c.blurb} ${c.founders ?? ""} ${c.skills.join(" ")}`.toLowerCase().includes(q.trim().toLowerCase())) return false;
			}
			return true;
		});
	}, [
		q,
		sector,
		kind
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "Indian deeptech",
				title: "Who hires an EE intern",
				lede: "Not only the Twitter list. Space, EV, silicon, drones, hydrogen — plus Qualcomm and TI as the paid backup. Filter by what you want to touch. Save a shortlist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search name, city, skill, founder",
				"aria-label": "Search companies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSector(s.id),
					className: cn("h-9 rounded-full px-3 text-xs uppercase tracking-wide whitespace-nowrap", sector === s.id ? "bg-primary text-primary-fg" : "text-muted shadow-[var(--shadow-border)]"),
					children: s.label
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: kinds.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(s.id),
					className: cn("h-9 rounded-full px-3 text-xs uppercase tracking-wide whitespace-nowrap", kind === s.id ? "bg-surface-2 text-fg" : "text-subtle shadow-[var(--shadow-border)]"),
					children: s.label
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					list.length,
					" teams",
					trackId ? " · your field is used on each profile, not as a hard filter" : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/companies/$id",
						params: { id: c.id },
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-medium text-fg",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: c.kind }),
									c.sectors.slice(0, 2).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "accent",
										children: s
									}, s))
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-subtle",
								children: [c.city, c.founders ? ` · ${c.founders}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: c.blurb
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": saved.includes(c.id) ? "Unsave" : "Save",
						onClick: () => toggleSaved(c.id),
						className: cn("flex size-11 shrink-0 items-center justify-center rounded-sm", saved.includes(c.id) ? "text-accent" : "text-subtle hover:text-fg"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved.includes(c.id) && "fill-accent") })
					})]
				}, c.id))
			})
		]
	});
}
//#endregion
export { CompaniesPage as component };
