import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Check, h as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as tracks, c as cn, o as useTrace, s as Button } from "./router-DnV27_4v.mjs";
import { t as crashWeeks } from "./crash-DlnB1nXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoQdsJdE.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const trackId = useTrace((s) => s.trackId);
	const setTrack = useTrace((s) => s.setTrack);
	const done = useTrace((s) => s.done);
	const crashTotal = crashWeeks.flatMap((w) => w.tasks).length;
	const crashDone = crashWeeks.flatMap((w) => w.tasks).filter((t) => done[t.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "Semester 5 of 8",
				title: "You have never opened an EDA tool. That is the actual problem.",
				lede: "Internship is 8th sem. You are in control, DSP, digital comms, and EM waves right now. Power electronics and embedded arrive in 6th — the money semester. Sixteen months is enough if you pick a field and ship one board."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Credits left",
						value: `59`,
						hint: `of 138 total`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Until intern",
						value: "~16 mo",
						hint: "EE442, not a BTP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "EDA crash",
						value: `${crashDone}/${crashTotal}`,
						hint: crashDone === 0 ? "Not started" : "tasks checked"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-accent",
							children: "First move"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight",
							children: "Six weeks to not be a tourist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: "KiCad, a cheap STM32 or ESP32, LTspice, git. Free tools. After this you can say “EDA” in an interview without lying. AI will write the HAL. It will not hold the probe."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/crash",
						children: ["Open the crash", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight",
							children: "Pick a field this month"
						}), trackId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tracks/$id",
							params: { id: trackId },
							className: "text-sm text-accent",
							children: ["Open ", tracks.find((t) => t.id === trackId)?.name]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted",
						children: "Startups do not hire “EE”. They hire embedded, power, DSP, silicon. Hedge later. Empty hands plus “open to everything” is how 7th sem feels late."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: tracks.map((t) => {
							const on = trackId === t.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTrack(t.id),
								className: cn("rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150", on ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface hover:shadow-[var(--shadow-border-hover)]"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-fg",
										children: t.name
									}), on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-6 items-center justify-center rounded-full bg-primary text-primary-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.short })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: t.thesis
								})]
							}, t.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jump, {
						to: "/roadmap",
						kicker: "Priority",
						title: "Hireable, depth, or founder",
						body: "Three modes, same calendar. Default is hireable: one artefact, one intern."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jump, {
						to: "/companies",
						kicker: "India",
						title: "Who actually hires EE",
						body: "Space, EV, silicon, drones — plus Qualcomm/TI as the paid backup. Not only the Twitter list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jump, {
						to: "/ai",
						kicker: "2026",
						title: "What AI already eats",
						body: "Boilerplate, homeworks, first-draft schematics. Bring-up, EMC, and a dead board: still you."
					})
				]
			})
		]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-3xl tabular-nums tracking-tight",
			children: value
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: hint
		})
	] });
}
function Jump({ to, kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.16em] text-accent",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-medium text-fg group-hover:text-primary",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Home as component };
