import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as cn, o as useTrace } from "./router-DnV27_4v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roadmap-Dq8olfRv.js
var import_jsx_runtime = require_jsx_runtime();
var phases = [
	{
		id: "now",
		when: "Aug–Nov 2026 · rest of 5th",
		title: "Do not skip the labs you already have",
		items: {
			hireable: [
				"Run the 6-week EDA crash in parallel with classes. This is the whole game.",
				"EE301 / EE321 / EE322 labs: keep raw data, write a 1-page note each. Those notes are portfolio.",
				"Open elective: CS (DSA or OS) or CAD, not a throwaway. You have one OE this term.",
				"Pick a field this month. Hedge later if you must. Do not stay 'open to everything' until 7th.",
				"Follow 8 companies. Read one engineering blog or FCC/teardown a week."
			],
			depth: [
				"Same crash, but extend EE322 or EE301 into a mini-paper: model vs measurement.",
				"Start the math you will need (linear algebra if weak, probability if comms).",
				"Read one textbook chapter a week in the field — Erickson, Oppenheim, or Ogata, not blogs only."
			],
			founder: [
				"Crash + labs, plus a problem you could charge for (a test jig, a charger, a sensor).",
				"Talk to 5 people who buy hardware in that problem. Notes in the repo.",
				"Cost the BOM in INR with LCSC + GST. Founders who cannot cost are hobbyists."
			]
		}
	},
	{
		id: "winter",
		when: "Dec 2026 · winter",
		title: "Finish the first artefact",
		items: {
			hireable: [
				"Board assembled, firmware logging, README with photos. Non-negotiable.",
				"Apply to winter/summer research (faculty, ISRO intern portals, InCore/Mindgrove if open).",
				"If the board failed, write the failure. Then spin v2. v2 is the story."
			],
			depth: ["Add a measurement that is not a tutorial: noise floor, efficiency, BER, step response.", "Email one professor with that plot, ask to sit in a lab in 6th sem."],
			founder: ["Put the artefact in front of a user. If nobody cares, kill it before 6th sem.", "A one-page spec: who, what, BOM, what you will know by May."]
		}
	},
	{
		id: "s6",
		when: "Jan–May 2027 · 6th sem",
		title: "The money semester",
		items: {
			hireable: [
				"EE331 Embedded and EE311 Power: treat as a job. Full attendance in those labs.",
				"Program elective: lock the field (see Electives). Do not take two unrelated PEs.",
				"Portfolio project that combines embedded + your field (FOC, EPS mock, SDR, FPGA UART).",
				"Dec–Mar: applications for summer internships. Qualcomm-class is often later; startups are rolling."
			],
			depth: ["Same cores, plus the hard PE (EE661 / EE613 / EE606 / EE621).", "A paper reproduction or a proper report, not only a GitHub toy."],
			founder: ["Use EE331/EE311 labs as the prototype factory. Do not start a second product.", "If you have a user, run a paid pilot even if it is ₹2,000. Revenue is a teacher."]
		}
	},
	{
		id: "summer",
		when: "May–Jul 2027 · summer",
		title: "Rehearsal intern",
		items: {
			hireable: [
				"Get any hardware seat: startup, TI/Bosch, faculty lab, ISRO. Unpaid is acceptable if the work is real.",
				"If you get nothing: 8-week self-intern. Spec, board, firmware, test log, as if a manager asked.",
				"Ask for a letter and a specific sentence of work you owned."
			],
			depth: ["Prefer a lab that publishes or a silicon team. One good reference > three certificates."],
			founder: ["Either a customer-facing build or a deep intern at a company you might compete with. Pick one."]
		}
	},
	{
		id: "s7",
		when: "Jul–Nov 2027 · 7th sem",
		title: "Applications window",
		items: {
			hireable: [
				"Portfolio frozen by 1 August: 2 repos, 1 video, 1 page CV, GitHub pinned.",
				"Qualcomm / TI / analog MNCs: watch July openings. Startups: rolling, but they fill.",
				"EE443 mini-project if you can — make it the same as the portfolio, not a new topic.",
				"Alumni: 20 messages, not 200. Attach the video, ask for 15 minutes.",
				"Do not start a new stack in September. Deepen the one you have."
			],
			depth: ["Mini-project should look like a paper + artefact. Use it as the writing sample.", "If MS is a parallel path, GRE/TOEFL only after applications for intern are out."],
			founder: ["If the product has a pulse, take EE443 as the company. If not, take the intern path — you can found at 24.", "A 12-credit intern at a hardware startup will teach you more about founding than another campus prototype."]
		}
	},
	{
		id: "s8",
		when: "Jan–May 2028 · 8th intern",
		title: "EE442, not a BTP, if you want a job",
		items: {
			hireable: [
				"Take EE442 (12 cr). BTP is for MS/thesis. Startups do not promote your BTP poster.",
				"In the intern: own a board or a test. Write the procedure. Ask for the return offer in week 8, not week 12.",
				"Keep a weekly log. Future you will need it for interviews."
			],
			depth: ["If the intern is shallow, add a night-time measurement campaign. Don't be precious — ship the report."],
			founder: ["Steal process: how they buy parts, how they fail EMC, how they talk to vendors. That is the MBA."]
		}
	}
];
var modeCopy = {
	hireable: {
		title: "Hireable",
		line: "Default. One field, one artefact, one intern. Optimised for an 8th-sem offer at a hardware team."
	},
	depth: {
		title: "Depth",
		line: "Same path, slower and more mathematical. For people who might MS, silicon, or GNC. Still needs a board."
	},
	founder: {
		title: "Founder",
		line: "Same engineering, plus users, BOM, and the courage to kill a project. Do not skip the crash to 'work on the idea'."
	}
};
var modes = [
	"hireable",
	"depth",
	"founder"
];
function RoadmapPage() {
	const mode = useTrace((s) => s.mode);
	const setMode = useTrace((s) => s.setMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "Priority mode",
				title: "Sixteen months, three ways to spend them",
				lede: "You are in 5th. 8th is the intern. The calendar does not change. The mode changes what you refuse."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: modes.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMode(m),
					className: cn("rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150", mode === m ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: modeCopy[m].title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: modeCopy[m].line
					})]
				}, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: [
					"All three modes start with the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/crash",
						className: "text-accent",
						children: "6-week EDA crash"
					}),
					". Founder mode is not “skip KiCad and pitch”. Depth mode is not “only theory”. If you pick nothing, the app treats you as hireable — the honest default for an 8th-sem intern."
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-6",
				children: phases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative pl-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-0 top-1 font-mono text-xs tabular-nums text-accent",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
							children: p.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl tracking-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: p.items[mode].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]",
								children: line
							}, line))
						})
					]
				}, p.id))
			})
		]
	});
}
//#endregion
export { RoadmapPage as component };
