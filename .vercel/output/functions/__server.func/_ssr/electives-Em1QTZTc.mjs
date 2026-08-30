import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { a as tracks, c as cn, o as useTrace } from "./router-DnV27_4v.mjs";
import { n as electives, t as electiveAdvice } from "./electives-zdZtRjxh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/electives-Em1QTZTc.js
var import_jsx_runtime = require_jsx_runtime();
function ElectivesPage() {
	const trackId = useTrace((s) => s.trackId) ?? "embedded";
	const setTrack = useTrace((s) => s.setTrack);
	const advice = electiveAdvice(trackId);
	const track = tracks.find((t) => t.id === trackId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "Program electives",
				title: "Take fewer, finish them, ship something",
				lede: "You get a handful of PEs across 6th and 7th. Two unrelated 3-credit courses is how people graduate 'interested in everything' with nothing to show. Pick a field, then take the take-list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTrack(t.id),
					className: cn("h-9 rounded-full px-3 text-xs whitespace-nowrap", t.id === trackId ? "bg-primary text-primary-fg" : "text-muted shadow-[var(--shadow-border)]"),
					children: t.name
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Showing advice for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: track?.name
					}),
					". EE622 (EMC) is a take on almost every hardware path — the sleeper on your list."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bucket, {
				title: "Take",
				variant: "ok",
				items: advice.take
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bucket, {
				title: "Consider",
				variant: "warn",
				items: advice.consider
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bucket, {
				title: "Skip unless that is the job",
				variant: "danger",
				items: advice.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "All 23, if you want the catalogue"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-border",
				children: electives.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-accent",
						children: e.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-sm",
						children: e.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-subtle",
						children: [
							e.kind,
							" · ",
							e.c,
							" cr"
						]
					})]
				}, e.code))
			})] })
		]
	});
}
function Bucket({ title, variant, items }) {
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant,
				children: items.length
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: items.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-accent",
							children: e.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2",
							children: e.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[11px] text-subtle",
						children: [
							e.kind,
							" · ",
							e.c,
							" cr"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: e.why
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-subtle",
					children: e.ai
				})
			] }, e.code))
		})]
	});
}
//#endregion
export { ElectivesPage as component };
