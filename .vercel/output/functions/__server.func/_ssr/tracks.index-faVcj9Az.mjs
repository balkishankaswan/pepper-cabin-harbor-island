import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as tracks, c as cn, o as useTrace } from "./router-DnV27_4v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tracks.index-faVcj9Az.js
var import_jsx_runtime = require_jsx_runtime();
function TracksPage() {
	const trackId = useTrace((s) => s.trackId);
	const setTrack = useTrace((s) => s.setTrack);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Eight fields",
			title: "Skills you actually need, by kind of engineering",
			lede: "College is one degree. Hiring is eight jobs. Each field below maps to your courses, the EDA you should open, the electives that are not a waste, and the Indian teams that hire it."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: cn(trackId === t.id && "shadow-[var(--shadow-border-hover)]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl tracking-tight",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: trackId === t.id ? "solid" : "default",
									children: t.short
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: t.thesis
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-fg/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: "For you if · "
								}), t.forYou]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] text-subtle",
								children: t.edas.join(" · ")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTrack(t.id),
							className: "h-11 rounded-sm px-4 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg",
							children: trackId === t.id ? "Selected" : "Select"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tracks/$id",
							params: { id: t.id },
							className: "inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-medium text-primary-fg",
							children: ["Open", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})]
				})
			}, t.id))
		})]
	});
}
//#endregion
export { TracksPage as component };
