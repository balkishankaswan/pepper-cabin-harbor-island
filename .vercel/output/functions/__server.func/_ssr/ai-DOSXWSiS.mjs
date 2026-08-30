import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Panel, r as PageTitle, t as AiFlag } from "./mark-CG5GOUAq.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-DOSXWSiS.js
var import_jsx_runtime = require_jsx_runtime();
var aiRows = [
	{
		field: "Writing",
		task: "Cover letters, README drafts, lab report English",
		level: "easy",
		detail: "Assume every intern uses this. Hiring managers now read for specific measurements, not adjectives. If the repo is empty, the letter is noise."
	},
	{
		field: "Software",
		task: "Firmware boilerplate, HAL, Python test scripts, ROS nodes",
		level: "easy",
		detail: "Copilot/Cursor write the first 70%. The intern who cannot explain the ISR, the stack size, or the DMA buffer is done in week one. Use AI, then delete half of it."
	},
	{
		field: "Coursework",
		task: "MATLAB homeworks, DSP problem sets, control derivations",
		level: "easy",
		detail: "These are no longer a signal. Labs, vivas, and 'open the repo and explain this plot' are the signal. Do the labs with your hands."
	},
	{
		field: "EDA",
		task: "First-draft schematics, digital auto-route, component search",
		level: "assist",
		detail: "2026 tools (Quilter, copilot-in-Altium, Flux) place and route simple digital. They still fail analog, power loops, HV creepage, and RF. You must still open KiCad."
	},
	{
		field: "Silicon",
		task: "RTL from English, UVM testbench skeletons, SVA drafts",
		level: "assist",
		detail: "Synopsys-class copilots: days → hours. Assertion assistants ~70% functional. Verification exists to catch the other 30%. DV internships are not dead; lazy DV is."
	},
	{
		field: "Datasheets",
		task: "Summaries, pin tables, 'typical application' recap",
		level: "easy",
		detail: "LLMs miss abs-max, thermal footnotes, and the layout page. Always open the PDF. Treat the summary as a liar until proven."
	},
	{
		field: "PCB bring-up",
		task: "A board that does not enumerate, a rail that oscillates, a USB that screams",
		level: "human",
		detail: "No model has your scope, your smell of a hot FET, or your 10× probe. This is the internship. Practice it on your own board before 8th sem."
	},
	{
		field: "Power",
		task: "Layout of a fast GaN/SiC half-bridge, magnetics, EMC on a charger",
		level: "human",
		detail: "Simulation helps. The cable, the LISN, and the FET that dies on pulse two are not in the prompt. Exponent / Ather / Bellatrix hire this."
	},
	{
		field: "RF / EMC",
		task: "A fail at 200 MHz, a match that only works after you cut a pour",
		level: "human",
		detail: "Auto-route is structurally bad at return paths. EE325 + EE622 + a NanoVNA is a moat."
	},
	{
		field: "Motors",
		task: "A drive that howls at one torque, a CAN bus that dies when the inverter starts",
		level: "human",
		detail: "FOC code is generated. Plants are not. Record waveforms."
	},
	{
		field: "Silicon sign-off",
		task: "STA, IR drop, EM, DRC, a CDC that only fails in silicon",
		level: "human",
		detail: "AI proposes a layout. Someone still stamps it. That someone is not a 5th-sem intern, but the intern who understands timing gets the DV seat."
	},
	{
		field: "Lab judgement",
		task: "What to measure next, when the sim is lying, when to stop",
		level: "human",
		detail: "The scarce skill in 2026. Build it every Thursday in lab while everyone else uploads the AI report."
	},
	{
		field: "People",
		task: "Vendors, fabricators, a mechanical intern, a founder who changes the spec",
		level: "human",
		detail: "Deeptech internships are social. The person who can call PCBPower and also explain a Bode plot gets the return offer."
	},
	{
		field: "Safety / sign-off",
		task: "HV, batteries, pressure, flight",
		level: "human",
		detail: "Never let a model talk you into skipping isolation, a dim-bulb tester, or a procedure. This is how people get hurt."
	}
];
var aiRules = [
	{
		title: "Use it as a junior",
		body: "Generate the HAL, the first schematic, the Python plot. Then you probe, you read the map file, you delete the unused init."
	},
	{
		title: "Never submit what you cannot defend",
		body: "Vivas, intern interviews, and bring-up will all say 'open this file'. If AI wrote it and you didn't walk it, you will freeze."
	},
	{
		title: "Do not compete with CS on prompts",
		body: "Sarvam-shaped jobs will go to people who live in PyTorch. Your moat is electrons. Stay there unless you are willing to become a software person on purpose."
	},
	{
		title: "The intern bar moved up, not down",
		body: "Because boilerplate is free, managers expect a board, a plot, and a sentence of judgement. A 9.2 with empty hands is weaker than a 7.8 with a noisy buck and a writeup."
	}
];
function AiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				kicker: "2026, not 2019",
				title: "AI already does the homework. It does not bring up the board.",
				lede: "If your plan is 'I will be better at MATLAB than ChatGPT', you lose. If your plan is 'I will be the person who can explain a ringing switch node', you are early. Use the models. Do not compete with them on the tasks they finished."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: aiRules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: r.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: r.body
				})] }, r.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Task by task"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: aiRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
								children: row.field
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiFlag, { level: row.level })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-medium",
							children: row.task
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: row.detail
						})
					] }, row.task))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm text-muted",
					children: "The practical response is the crash: a board you probed. That is the artefact AI cannot fake in a 20-minute interview."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/crash",
					className: "inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-fg",
					children: "Open the 6-week crash"
				})]
			})
		]
	});
}
//#endregion
export { AiPage as component };
