import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, n as Badge, r as PageTitle } from "./mark-CG5GOUAq.mjs";
import { c as cn } from "./router-DnV27_4v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/curriculum-CaOGzqi7.js
var semesters = [
	{
		id: 1,
		label: "I",
		credits: 23,
		why: "Foundation. CS101 and the chemistry/physics labs matter more than they felt at the time — you will reuse C and lab discipline every week from now on.",
		courses: [
			{
				code: "MTH101",
				name: "Calculus",
				l: 3,
				t: 1,
				p: 0,
				c: 4
			},
			{
				code: "PH101",
				name: "Quantum Physics",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "CS101",
				name: "Computer Programming",
				l: 3,
				t: 0,
				p: 2,
				c: 4
			},
			{
				code: "CH102",
				name: "Organic and Inorganic Chemistry",
				l: 1,
				t: 1,
				p: 0,
				c: 2
			},
			{
				code: "CH101",
				name: "Physical Chemistry",
				l: 1,
				t: 1,
				p: 0,
				c: 2
			},
			{
				code: "CH101L",
				name: "Chemistry Lab",
				l: 0,
				t: 0,
				p: 3,
				c: 2
			},
			{
				code: "ME101",
				name: "Introduction to Manufacturing",
				l: 0,
				t: 0,
				p: 3,
				c: 2
			},
			{
				code: "HS101",
				name: "Foundation Programme in HSS",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "EE100",
				name: "Introduction to Profession",
				l: 1,
				t: 0,
				p: 0,
				c: 1
			},
			{
				code: "NO101",
				name: "National Sports Organisation",
				l: 0,
				t: 0,
				p: 0,
				c: "P/NP"
			}
		]
	},
	{
		id: 2,
		label: "II",
		credits: 21,
		why: "Linear algebra and ODEs are the language of control, DSP, and ML. EE101 is the first real electrical course — keep those notes.",
		courses: [
			{
				code: "MA1021",
				name: "Basic Linear Algebra",
				l: 3,
				t: 1,
				p: 0,
				c: "2*",
				note: "Split with MA1022"
			},
			{
				code: "MA1022",
				name: "Ordinary Differential Equations",
				l: 3,
				t: 1,
				p: 0,
				c: "2*"
			},
			{
				code: "PH102",
				name: "Electricity and Magnetism",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "EE101",
				name: "Intro to Electrical and Electronic Engineering",
				l: 3,
				t: 1,
				p: 0,
				c: 4
			},
			{
				code: "ME102",
				name: "Engineering Graphics and CAD",
				l: 1,
				t: 0,
				p: 3,
				c: 2
			},
			{
				code: "PH103",
				name: "Physics Lab",
				l: 0,
				t: 0,
				p: 3,
				c: 2
			},
			{
				code: "BIO101",
				name: "Introductory Biology",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "NO102",
				name: "National Sports Organisation",
				l: 0,
				t: 0,
				p: 0,
				c: "P/NP"
			},
			{
				code: "EE102",
				name: "Circuit Theory",
				l: 3,
				t: 0,
				p: 0,
				c: 3,
				note: "Department core"
			}
		]
	},
	{
		id: 3,
		label: "III",
		credits: 18,
		why: "Devices, digital, and signals. This is the last semester where everything is still 'core EE'. Digital lab + signals is the on-ramp to both VLSI and DSP.",
		courses: [
			{
				code: "MA3151",
				name: "Complex Analysis",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "MA3142",
				name: "Differential Equations II",
				l: 3,
				t: 1,
				p: 0,
				c: 2
			},
			{
				code: "EE231",
				name: "Electronic Devices and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE232",
				name: "Digital Circuits and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE201",
				name: "Signals and Systems",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "OE",
				name: "Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			}
		]
	},
	{
		id: 4,
		label: "IV",
		credits: 17,
		why: "Analog, machines, probability. Analog lab is the closest thing college gives you to 'bring-up'. Probability is required for comms, DSP, and ML — do not treat it as a GPA dump.",
		courses: [
			{
				code: "EE223",
				name: "Analog Communication Systems",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "EE233",
				name: "Analog Circuits and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE211",
				name: "Electrical Machines and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE221",
				name: "Probability and Random Processes",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "OE",
				name: "Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			}
		]
	},
	{
		id: 5,
		label: "V · you are here",
		credits: 18,
		why: "Control, DSP, digital comms, EM waves — four lab-heavy cores at once. Do not outsource the labs to AI. The intern who can explain a Bode plot they measured, a filter they implemented, and a constellation they demodulated is already ahead of most of the class.",
		courses: [
			{
				code: "EE325",
				name: "Electromagnetic Waves",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "EE321",
				name: "Digital Communication Techniques and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE301",
				name: "Control Systems and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE322",
				name: "Digital Signal Processing and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "OE",
				name: "Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			}
		]
	},
	{
		id: 6,
		label: "VI · the money semester",
		credits: 17,
		why: "Power electronics + embedded systems. For a deeptech internship this is the most important semester of the degree. Treat both labs like a job. Pick program electives that lock a field — do not hedge with two unrelated PEs.",
		courses: [
			{
				code: "EE312",
				name: "Power Systems",
				l: 2,
				t: 1,
				p: 0,
				c: 3
			},
			{
				code: "EE311",
				name: "Power Electronics and Lab",
				l: 2,
				t: 1,
				p: 3,
				c: 4
			},
			{
				code: "EE331",
				name: "Embedded Systems and Lab",
				l: 3,
				t: 0,
				p: 3,
				c: 4
			},
			{
				code: "PE",
				name: "Program Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "PE/OE",
				name: "Program Elective / Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			}
		]
	},
	{
		id: 7,
		label: "VII · applications window",
		credits: 12,
		why: "Light load on purpose. Mini-project or PE, then applications. Qualcomm-class internships open around July. Hardware startup internships are rolling but freeze once they have two good people. Portfolio must exist by August.",
		courses: [
			{
				code: "EE443",
				name: "Program Elective / Mini Project",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "PE",
				name: "Program Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "PE/OE",
				name: "Program Elective / Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			},
			{
				code: "OE",
				name: "Open Elective",
				l: 3,
				t: 0,
				p: 0,
				c: 3
			}
		]
	},
	{
		id: 8,
		label: "VIII · internship",
		credits: 12,
		why: "Default: EE442 Internship, 12 credits. Alternate: EE441 BTP (6) plus electives. If you want a startup offer, take the internship. A BTP is for a thesis / MS path, not for 'I like startups'.",
		courses: [{
			code: "EE442",
			name: "Internship",
			l: 12,
			t: 0,
			p: 0,
			c: 12,
			note: "Preferred for jobs"
		}, {
			code: "EE441",
			name: "BTP (alternate)",
			l: 6,
			t: 0,
			p: 0,
			c: 6,
			note: "Then 6 more elective credits"
		}]
	}
];
var openElectiveIdeas = [
	{
		title: "Data structures / algorithms (CS)",
		why: "Not to grind LeetCode. So you can write test harnesses, parse logs, and not drown in a firmware repo. One CS course is enough."
	},
	{
		title: "Operating systems (CS)",
		why: "Makes FreeRTOS, Linux on a Pi, and 'why did my ISR deadlock' make sense. High leverage if you go embedded."
	},
	{
		title: "CAD / manufacturing (ME)",
		why: "You will design boards that sit in enclosures. Being able to open Fusion/SolidWorks and talk GD&T with a mechanical intern is a superpower at a 20-person startup."
	},
	{
		title: "Optics / photonics (PH)",
		why: "Pixxel, Digantara, GalaxEye optical payloads. Only if you actually like physics."
	},
	{
		title: "Economics / accounting (HS)",
		why: "Founder mode. You will otherwise ship a ₹40k BOM for a ₹4k problem."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/curriculum-2RdRH6RD.js
var import_jsx_runtime = require_jsx_runtime();
function CurriculumPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: `138 credits`,
				title: "The degree, with the semester that actually matters labelled",
				lede: "You are in V. VI is power electronics + embedded — treat it as a job. VII is the applications window. VIII is EE442 internship unless you are doing a thesis on purpose."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-4",
				children: semesters.map((s) => {
					const here = s.id === 5;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: cn(here && "shadow-[var(--shadow-border-hover)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-2xl tracking-tight",
									children: ["Semester ", s.label]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [here ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "solid",
										children: "You are here"
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs tabular-nums text-subtle",
										children: [s.credits, " cr"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[28rem] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "text-[11px] uppercase tracking-wide text-subtle",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-1 font-medium",
												children: "Code"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-1 font-medium",
												children: "Course"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-1 font-medium",
												children: "L-T-P"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-1 font-medium",
												children: "C"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: s.courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 font-mono text-xs text-accent",
												children: c.code
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "py-2 text-fg",
												children: [c.name, c.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-subtle",
													children: c.note
												}) : null]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "py-2 tabular-nums text-muted",
												children: [
													c.l,
													"-",
													c.t,
													"-",
													c.p
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 tabular-nums text-muted",
												children: c.c
											})
										]
									}, c.code + c.name)) })]
								})
							})
						]
					}) }, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Open electives that are not a dump"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: openElectiveIdeas.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: o.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: o.why
					})] }, o.title))
				})]
			})
		]
	});
}
//#endregion
export { CurriculumPage as component };
