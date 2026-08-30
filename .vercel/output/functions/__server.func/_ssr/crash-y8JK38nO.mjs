import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { d as Check } from "../_libs/lucide-react.mjs";
import { c as cn, o as useTrace } from "./router-DnV27_4v.mjs";
import { t as crashWeeks } from "./crash-DlnB1nXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crash-y8JK38nO.js
var import_jsx_runtime = require_jsx_runtime();
function CrashPage() {
	const done = useTrace((s) => s.done);
	const toggle = useTrace((s) => s.toggleDone);
	const total = crashWeeks.flatMap((w) => w.tasks).length;
	const n = crashWeeks.flatMap((w) => w.tasks).filter((t) => done[t.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "You said you don't know EDA",
				title: "Six weeks. Free tools. One board.",
				lede: "This is the bottleneck, not CGPA. Do it in parallel with 5th-sem labs. Budget: a Nucleo or ESP32 (₹800–2,000), maybe five PCBs (₹500–1,500), optional RTL-SDR later. Do not wait for a club to teach you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
					children: "Progress"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-display text-3xl tabular-nums",
					children: [
						n,
						" / ",
						total
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-accent transition-[width] duration-300",
						style: { width: `${n / total * 100}%` }
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-8",
				children: crashWeeks.map((w) => {
					const wDone = w.tasks.filter((t) => done[t.id]).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.16em] text-accent",
								children: [
									"Week ",
									w.week,
									" · ",
									wDone,
									"/",
									w.tasks.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl tracking-tight",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: w.why
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: w.tasks.map((t) => {
								const on = !!done[t.id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggle(t.id),
									className: cn("flex w-full items-start gap-3 rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)]", on ? "bg-surface-2" : "bg-surface"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm", on ? "bg-primary text-primary-fg" : "shadow-[var(--shadow-border)]"),
										children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-sm leading-relaxed", on ? "text-muted" : "text-fg"),
										children: t.text
									})]
								}) }, t.id);
							})
						})]
					}, w.id);
				})
			})
		]
	});
}
//#endregion
export { CrashPage as component };
