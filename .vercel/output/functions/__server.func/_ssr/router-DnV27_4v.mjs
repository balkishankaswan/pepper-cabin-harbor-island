import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Map, c as House, f as Building2, i as Menu, l as GraduationCap, n as X, o as ListChecks, p as Bot, r as TriangleAlert, s as Layers, t as Zap, u as Cpu } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogPortal, c as Slot, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DnV27_4v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
				className: "size-8 text-danger",
				strokeWidth: 1.75
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-2 text-sm text-accent",
				children: "Back to TRACE"
			})
		]
	});
}
function AppNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "No such node"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-muted",
				children: "That page is not on the map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-accent",
				children: "Home"
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-surface-2 text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface-2",
			ghost: "text-muted hover:text-fg hover:bg-surface-2",
			accent: "bg-accent text-primary-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-bg/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed z-50 flex flex-col bg-surface shadow-[var(--shadow-border)] transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out", side === "right" && "inset-y-0 right-0 h-full w-[min(100%,20rem)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "left" && "inset-y-0 left-0 h-full w-[min(100%,20rem)] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", side === "bottom" && "inset-x-0 bottom-0 max-h-[85vh] rounded-t-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-sm p-2 text-muted hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-5 pr-12", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl text-fg", className),
		...props
	});
}
var useTrace = create()(persist((set, get) => ({
	trackId: null,
	mode: "hireable",
	done: {},
	saved: [],
	setTrack: (trackId) => set({ trackId }),
	setMode: (mode) => set({ mode }),
	toggleDone: (id) => set({ done: {
		...get().done,
		[id]: !get().done[id]
	} }),
	toggleSaved: (id) => {
		set({ saved: get().saved.includes(id) ? get().saved.filter((x) => x !== id) : [...get().saved, id] });
	}
}), { name: "trace-ee" }));
var tracks = [
	{
		id: "embedded",
		name: "Embedded & firmware",
		short: "The default deeptech hire.",
		thesis: "Almost every Indian hardware startup's first EE intern is an embedded person: C on an MCU, a schematic they own, a board they brought up. This is the highest-probability path from 5th sem to an 8th-sem offer.",
		forYou: "You like making LEDs do what you said, you don't mind datasheets, and you would rather debug a UART than prove a theorem. CS101 was fun. Analog lab was okay if the circuit finally worked.",
		courses: [
			"CS101",
			"EE232",
			"EE233",
			"EE331",
			"EE301"
		],
		electives: [
			"EE661",
			"EE607",
			"EE622",
			"EE615"
		],
		skills: [
			"c-embedded",
			"git",
			"kicad",
			"stm32",
			"rtos",
			"scope",
			"datasheet",
			"python-test"
		],
		edas: [
			"KiCad",
			"STM32CubeIDE / PlatformIO",
			"PulseView",
			"OpenOCD / J-Link",
			"Git"
		],
		companies: [
			"skyroot",
			"agnikul",
			"pixxel",
			"galaxeye",
			"vecros",
			"ather",
			"raptee",
			"naxatra",
			"ati",
			"airbound"
		],
		internBar: [
			"A public repo: MCU + sensor + UART log, not Arduino-only blink",
			"One KiCad board, even 2-layer, with a README photo of the assembled PCB",
			"Can walk through a schematic on a whiteboard without freezing",
			"Git history that is not one commit named 'final'"
		],
		aiEasy: [
			"HAL init, CubeMX-style boilerplate, driver skeletons",
			"CMake / PlatformIO config, README drafts",
			"Translating a datasheet register map into a C header"
		],
		aiCannot: [
			"A board that enumerates on USB then dies at 60 °C",
			"An ISR that works until the motor starts",
			"Deciding the reset architecture, bootloader, and brown-out strategy"
		],
		now: [
			"Order an STM32 Nucleo or a cheap ESP32-S3 devkit this week. Not 'after midsems'.",
			"Finish CS101-level C: pointers, structs, volatile, bitwise. 4 evenings.",
			"KiCad: draw a USB-UART + LED board. Do not skip the datasheet for the regulator."
		]
	},
	{
		id: "power",
		name: "Power electronics & energy",
		short: "Watts, heat, and money.",
		thesis: "India is building chargers, inverters, electrolyzers, satellite EPS, and battery systems. Power electronics is the scarce skill. EE311 in 6th sem is your on-ramp — start LTspice now so that lab is not the first converter you have ever seen.",
		forYou: "You like machines lab, you think in efficiency and thermal, and 'this MOSFET exploded' sounds like a puzzle not a tragedy. You do not need to love utilities or load-flow.",
		courses: [
			"EE211",
			"EE102",
			"EE311",
			"EE312",
			"EE233"
		],
		electives: [
			"EE613",
			"EE616",
			"EE615",
			"EE610",
			"EE619"
		],
		skills: [
			"ltspice",
			"kicad",
			"matlab",
			"gate-drive",
			"magnetics",
			"sic-gan",
			"scope",
			"thermal"
		],
		edas: [
			"LTspice / QSPICE",
			"PLECS or Simscape Electrical",
			"KiCad",
			"Altium (later)",
			"MATLAB"
		],
		companies: [
			"exponent",
			"gegadyne",
			"log9",
			"ohmium",
			"ather",
			"ola",
			"suncharge",
			"moonrider",
			"bellatrix",
			"pixxel"
		],
		internBar: [
			"A simulated buck/boost with measured vs simulated waveforms",
			"Can explain CCM vs DCM, loop compensation at a whiteboard",
			"A hardware converter on a PCB or even a well-instrumented protoboard",
			"Respect for safety: isolation, creepage, a dim-bulb tester"
		],
		aiEasy: [
			"First-pass LTspice netlists, BOM from a reference design",
			"Loss spreadsheet, inductor current ripple math",
			"Summarizing an app note from TI or Infineon"
		],
		aiCannot: [
			"Layout of a 2 kW GaN half-bridge that passes EMC",
			"A converter that oscillates only with the real cable inductance",
			"Magnetics that don't saturate at 70 °C ambient in a scooter"
		],
		now: [
			"LTspice: buck, then boost, then a current-mode loop. Save the .asc files in git.",
			"Read Erickson ch. 1–2 or the TI 'switch-mode basics' series. Not a 40-hour course.",
			"In EE301 lab, treat every plant as something you might one day close a current loop around."
		]
	},
	{
		id: "drives",
		name: "EVs, machines & drives",
		short: "Motors that earn revenue.",
		thesis: "Ather, Raptee, Naxatra, Ola, Simple — they hire people who can FOC a PMSM, read a CAN bus, and not kill a battery pack. EE211 already happened. EE615 in 6th/7th is the elective that makes this official.",
		forYou: "Machines lab clicked. You like vehicles, or you like the idea of a motor as a plant. You can tolerate automotive process (CAN, ISO 26262-lite, suppliers).",
		courses: [
			"EE211",
			"EE301",
			"EE311",
			"EE331"
		],
		electives: [
			"EE615",
			"EE611",
			"EE613",
			"EE606"
		],
		skills: [
			"foc",
			"c-embedded",
			"matlab",
			"can",
			"bms",
			"kicad",
			"inverter",
			"scope"
		],
		edas: [
			"MATLAB/Simulink",
			"STM32 motor-control SDK",
			"KiCad",
			"CANoe / SavvyCAN",
			"PLECS"
		],
		companies: [
			"ather",
			"ola",
			"simple",
			"ultraviolette",
			"raptee",
			"naxatra",
			"suncharge",
			"euler",
			"ati"
		],
		internBar: [
			"FOC on a cheap gimbal motor or a Nucleo + IHM08M1, with current waveforms",
			"CAN sniffing and a DBC file you wrote",
			"Can explain field weakening, regen, and why your inverter DC link rings"
		],
		aiEasy: [
			"Park/Clarke transform code, PI tuner first guess",
			"Simulink models from a textbook diagram",
			"CAN DBC boilerplate"
		],
		aiCannot: [
			"A motor that howls at 0.4 pu torque because of cogging + current-loop lag",
			"Inverter dead-time that cooks a GaN FET on a 400 V bus",
			"BMS that disagrees with the pack after 200 cycles"
		],
		now: [
			"Revisit EE211 notes: equivalent circuit, torque, slip, PMSM vs induction.",
			"Get a cheap BLDC + ESC, then throw away the ESC and drive it yourself in 6th sem.",
			"Read a teardown of an Ather or Ola inverter (YouTube + service manuals)."
		]
	},
	{
		id: "control",
		name: "Control & robotics",
		short: "Plants, not prompts.",
		thesis: "EE301 is this semester. If you like it, robotics startups (Agam, VECROS, Ati, Addverb, Airbound) need people who can identify a plant, close a loop, and not trust a simulation. This is also the path into GNC-adjacent space work.",
		forYou: "You like math that moves metal. State-space did not scare you. You would rather tune a Kalman filter than draw a PCB — but you still must touch hardware or you will be a MATLAB intern forever.",
		courses: [
			"EE301",
			"EE201",
			"EE322",
			"MA1021",
			"MA1022"
		],
		electives: [
			"EE601",
			"EE602",
			"EE605",
			"EE606",
			"EE608",
			"EE607"
		],
		skills: [
			"matlab",
			"python-ml",
			"state-est",
			"ros2",
			"c-plus",
			"system-id",
			"embedded-lite"
		],
		edas: [
			"MATLAB/Simulink",
			"Python (NumPy/SciPy)",
			"ROS 2",
			"Gazebo / Isaac",
			"Git"
		],
		companies: [
			"agam",
			"vecros",
			"airbound",
			"ati",
			"swaayatt",
			"addverb",
			"skyroot",
			"agnikul"
		],
		internBar: [
			"A real plant you identified (DC motor, quad, inverted pendulum) with residual plots",
			"One ROS 2 node talking to hardware, not only turtlesim",
			"Can derive a discrete PID and explain anti-windup without notes"
		],
		aiEasy: [
			"Sympy derivations, first-draft MATLAB scripts, LQR gain dumps",
			"ROS 2 boilerplate, URDF from a description",
			"Paper summaries of MPC / adaptive control"
		],
		aiCannot: [
			"A drone that oscillates only in ground effect",
			"Friction, backlash, and a current limit the model omitted",
			"Choosing sensors and sample rate for a real vehicle"
		],
		now: [
			"EE301 lab: keep raw CSVs. Fit a model. That file is a portfolio piece.",
			"Python: NumPy, Matplotlib, a discrete PID on a simulated plant this month.",
			"Do not take four control electives. Take EE606 or EE608 plus something that ships (embedded or DSP)."
		]
	},
	{
		id: "vlsi",
		name: "VLSI & silicon",
		short: "India is finally making chips.",
		thesis: "Mindgrove, InCore, Netrasemi, Agnit, plus TI / Qualcomm / Cadence / Synopsys. The India semiconductor story is real in 2026. The catch: the interview is Verilog + digital + C, and college will not teach EDA. Start Verilator this semester, not Cadence fantasies.",
		forYou: "Digital lab was the high of 3rd sem. You like bits, timing, and 'this failed at 200 MHz'. You can sit still. You do not need to love analog layout on day one.",
		courses: [
			"EE232",
			"EE231",
			"EE201",
			"EE661"
		],
		electives: [
			"EE661",
			"EE604",
			"EE607",
			"EE621"
		],
		skills: [
			"verilog",
			"sv-uvm",
			"fpga",
			"sta",
			"c-embedded",
			"linux",
			"python-test"
		],
		edas: [
			"Verilator + GTKWave (start)",
			"AMD Vivado (FPGA)",
			"Synopsys VCS / Verdi (industry)",
			"Cadence Virtuoso (analog, later)",
			"Yosys + OpenROAD (open ASIC)"
		],
		companies: [
			"mindgrove",
			"incore",
			"netrasemi",
			"agnit",
			"qualcomm",
			"ti",
			"cadence",
			"synopsys"
		],
		internBar: [
			"A Verilog core (UART, SPI, RISC-V mini) simulated with Verilator, waveform screenshots",
			"An FPGA demo: the same core blinking or talking UART on a cheap Artix/Cmod",
			"Can explain setup/hold, metastability, and a CDC FIFO"
		],
		aiEasy: [
			"RTL from a plain-English spec, UVM boilerplate, assertion drafts",
			"Synopsys-style AI copilots: days of TB writing → hours, ~70% functional on assertions",
			"Synthesis script templates"
		],
		aiCannot: [
			"Sign-off: STA, IR drop, EM, DRC on a real floorplan",
			"A CDC bug that only hits in silicon",
			"Knowing which of the 25% wrong assertions would have shipped a bad chip"
		],
		now: [
			"Install Verilator + GTKWave. HDLBits, then a UART, then a simple CPU. No paid tools yet.",
			"EE232 notes: FSMs, timing. Re-do one lab in Verilog if it was in VHDL.",
			"FPGA board if you can (₹3–6k). Simulation-only portfolios get fewer callbacks."
		]
	},
	{
		id: "comms",
		name: "Comms, DSP & sensing",
		short: "This semester is the on-ramp.",
		thesis: "You are literally sitting in EE321, EE322, EE325. GalaxEye, PierSight, Pixxel, Qualcomm, Tejas need people who can go from a sampled waveform to a detection. DSP plus a bit of RF or FPGA is a rare combo in India.",
		forYou: "You like signals more than circuits. MATLAB is not painful. You would rather write a matched filter than size a MOSFET. Space SAR and wireless are the startup versions of this.",
		courses: [
			"EE201",
			"EE221",
			"EE223",
			"EE321",
			"EE322",
			"EE325"
		],
		electives: [
			"EE621",
			"EE624",
			"EE627",
			"EE628",
			"EE622"
		],
		skills: [
			"matlab",
			"python-dsp",
			"sdr",
			"fpga-dsp",
			"stats",
			"emc-lite"
		],
		edas: [
			"MATLAB",
			"Python (NumPy/SciPy)",
			"GNU Radio",
			"Vivado HLS / HDL",
			"Keysight ADS (later)"
		],
		companies: [
			"galaxeye",
			"piersight",
			"pixxel",
			"qualcomm",
			"tejas",
			"digantara",
			"dhruva"
		],
		internBar: [
			"A DSP lab you extended: your own filter / sync / demod, with plots and a short writeup",
			"GNU Radio + a cheap SDR (RTL-SDR / Pluto) doing something real (FM, ADS-B, a tone)",
			"Can talk about sampling, aliasing, and SNR without waving hands"
		],
		aiEasy: [
			"MATLAB homework, filter coefficient dumps, paper implementations",
			"Python plotting, spectrograms, first-pass demod scripts",
			"Explaining OFDM in a notes-style summary"
		],
		aiCannot: [
			"A SAR image with range-walk your model didn't include",
			"An RF front-end that fails EMC at 200 MHz",
			"Choosing ADC bits, analog gain, and a clock that doesn't jitter the constellation"
		],
		now: [
			"Treat EE322 and EE321 labs as portfolio. Export data. Write a 1-page 'what I built'.",
			"RTL-SDR (₹1.5–2k) + GNU Radio on a weekend.",
			"Open elective: image processing or a CS course, not a random HSS dump, if you want EE624 later."
		]
	},
	{
		id: "space",
		name: "Space systems",
		short: "The Indian deeptech poster child.",
		thesis: "Skyroot, Agnikul, Pixxel, GalaxEye, PierSight, Bellatrix, Dhruva, Digantara. They do not hire 'space engineers'. They hire embedded, power, RF, DSP, and GNC people who can work in a cleanroom and write a test procedure. Pick a discipline, then apply the space constraint.",
		forYou: "You want the mission. Fine. Then pick embedded, power, or DSP as the actual skill. 'I love space' with zero KiCad is a rejection.",
		courses: [
			"EE331",
			"EE311",
			"EE325",
			"EE233",
			"EE322",
			"EE301"
		],
		electives: [
			"EE622",
			"EE613",
			"EE627",
			"EE621",
			"EE661"
		],
		skills: [
			"kicad",
			"c-embedded",
			"power-budget",
			"emc",
			"rf-lite",
			"test-proc",
			"altium"
		],
		edas: [
			"KiCad then Altium",
			"LTspice",
			"STK or GMAT (orbital, optional)",
			"GNU Radio",
			"MATLAB"
		],
		companies: [
			"skyroot",
			"agnikul",
			"pixxel",
			"galaxeye",
			"piersight",
			"bellatrix",
			"dhruva",
			"digantara",
			"arctus",
			"qosmic"
		],
		internBar: [
			"A complete board: schematic, layout, firmware, test log. Space-themed is optional.",
			"Power budget spreadsheet for a fake 3U CubeSat EPS — shows you understand the domain",
			"Comfort with documentation: ICD, test procedure, versioned gerbers"
		],
		aiEasy: [
			"First-draft ICDs, power-budget sheets, link-budget arithmetic",
			"Harness BOMs, connector research",
			"Summaries of ECSS / NASA workmanship docs"
		],
		aiCannot: [
			"A harness that fails vibe, a regulator that drops out in vacuum",
			"RF from a SAR payload into your GPS receiver",
			"The 2 a.m. launch-campaign debug"
		],
		now: [
			"Do the embedded crash. Space teams will not teach you C.",
			"Read a CubeSat EPS app note (Clyde Space / GOMspace / any open 1U design).",
			"Follow flight updates, but spend 10× more hours on a PCB than on Twitter."
		]
	},
	{
		id: "analog",
		name: "Analog, RF & EMC",
		short: "The last thing AI will eat.",
		thesis: "EE233 happened. EE325 is now. EMC (EE622) is the most underrated elective on your list. Startups fail certification, not Python. Analog/RF people are scarce, paid, and cannot be replaced by a copilot that auto-routes a 2-layer digital board.",
		forYou: "You liked analog lab when it finally worked. You think in poles, parasitics, and 'why is this ringing'. You can live with fewer job postings and better ones.",
		courses: [
			"EE233",
			"EE231",
			"EE325",
			"EE102"
		],
		electives: [
			"EE622",
			"EE627",
			"EE613",
			"EE661"
		],
		skills: [
			"analog-design",
			"ltspice",
			"emc",
			"rf-lite",
			"kicad",
			"scope",
			"layout"
		],
		edas: [
			"LTspice / QSPICE",
			"KiCad (with SI awareness)",
			"ADS / HFSS later",
			"Ansys EMC",
			"VNA + SA in lab"
		],
		companies: [
			"ti",
			"galaxeye",
			"piersight",
			"qualcomm",
			"ather",
			"pixxel",
			"agnit",
			"bellatrix"
		],
		internBar: [
			"An analog board you laid out: LNA, or a precision front-end, or a gate driver with clean switching",
			"Can probe without destroying the node; know 10× probe grounding",
			"A paragraph on a real EMC fail (even a lab SMPS) and what you changed"
		],
		aiEasy: [
			"Op-amp circuit first guesses, filter tables, SPICE netlists",
			"Auto-router for digital. Component search.",
			"App-note summaries"
		],
		aiCannot: [
			"A 2.4 GHz match that only works on the VNA after you cut a pour",
			"An EMC fail at 120 MHz from a cable you didn't model",
			"Offset, drift, and 1/f that wreck a sensor front-end"
		],
		now: [
			"EE325: actually do the problem sets. Waveguides now, antennas and EMC later.",
			"Practice probing in analog lab leftovers / club. Ground spring, not a 6-inch alligator.",
			"Plan to take EE622 if it runs. If it doesn't, read Henry Ott or bogatin on your own."
		]
	}
];
var trackById = Object.fromEntries(tracks.map((t) => [t.id, t]));
var primary = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/tracks",
		label: "Fields",
		icon: Layers
	},
	{
		to: "/companies",
		label: "Firms",
		icon: Building2
	},
	{
		to: "/roadmap",
		label: "Plan",
		icon: Map
	}
];
var more = [
	{
		to: "/crash",
		label: "6-week crash",
		icon: Zap
	},
	{
		to: "/curriculum",
		label: "Degree map",
		icon: GraduationCap
	},
	{
		to: "/electives",
		label: "Electives",
		icon: ListChecks
	},
	{
		to: "/skills",
		label: "EDA & skills",
		icon: Cpu
	},
	{
		to: "/ai",
		label: "What AI eats",
		icon: Bot
	}
];
function NavLink({ to, label, icon: Icon, onClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const active = to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		onClick,
		className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-150", active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4 shrink-0",
			strokeWidth: 1.75
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const trackId = useTrace((s) => s.trackId);
	const track = trackId ? trackById[trackId] : null;
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-bg px-3 py-5 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-8 px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-tight",
							children: "TRACE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
							children: "EE · deeptech"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 flex-col gap-1",
						children: [
							primary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, { ...item }, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-border" }),
							more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, { ...item }, item.to))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-surface-2 px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-subtle",
								children: "Semester"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: "5 of 8 · 18 cr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: track ? track.name : "No field picked"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-bg/90 px-4 backdrop-blur-sm md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-xl",
					children: "TRACE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => setOpen(true),
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "bg-bg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "TRACE" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1 px-3 pb-8",
						children: [...primary, ...more].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							...item,
							onClick: () => setOpen(false)
						}, item.to))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "md:pl-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 pb-28 pt-8 md:px-8 md:pb-16 md:pt-10",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] md:hidden",
				children: [...primary, {
					to: "/crash",
					label: "Crash",
					icon: Zap
				}].map((item) => {
					const Icon = item.icon;
					const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-wide", active ? "text-fg" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4",
							strokeWidth: 1.75
						}), item.label]
					}, item.to);
				})
			})
		]
	});
}
var styles_default = "/assets/styles-9N0_GxF4.css";
var APP_NAME = "TRACE";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Fifth semester to a deeptech internship. An EE map of fields, electives, Indian companies, EDA, and what AI already eats."
			},
			{
				name: "theme-color",
				content: "#0b0c0b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-BoQdsJdE.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./ai-DOSXWSiS.mjs");
var Route$11 = createFileRoute("/ai")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./companies-DIZQ-glI.mjs");
var Route$10 = createFileRoute("/companies")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./crash-y8JK38nO.mjs");
var Route$9 = createFileRoute("/crash")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./curriculum-2RdRH6RD.mjs");
var Route$8 = createFileRoute("/curriculum")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./electives-Em1QTZTc.mjs");
var Route$7 = createFileRoute("/electives")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./roadmap-Dq8olfRv.mjs");
var Route$6 = createFileRoute("/roadmap")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./skills-BkvAOiNb.mjs");
var Route$5 = createFileRoute("/skills")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./tracks-C_H8CPvg.mjs");
var Route$4 = createFileRoute("/tracks")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./companies.index-BhsJmt3E.mjs");
var Route$3 = createFileRoute("/companies/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./companies._id-CDPjoWDQ.mjs");
var Route$2 = createFileRoute("/companies/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./tracks.index-faVcj9Az.mjs");
var Route$1 = createFileRoute("/tracks/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./tracks._id-DUmBNNuY.mjs");
var Route = createFileRoute("/tracks/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AiRoute = Route$11.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => Route$13
});
var CompaniesRoute = Route$10.update({
	id: "/companies",
	path: "/companies",
	getParentRoute: () => Route$13
});
var CrashRoute = Route$9.update({
	id: "/crash",
	path: "/crash",
	getParentRoute: () => Route$13
});
var CurriculumRoute = Route$8.update({
	id: "/curriculum",
	path: "/curriculum",
	getParentRoute: () => Route$13
});
var ElectivesRoute = Route$7.update({
	id: "/electives",
	path: "/electives",
	getParentRoute: () => Route$13
});
var RoadmapRoute = Route$6.update({
	id: "/roadmap",
	path: "/roadmap",
	getParentRoute: () => Route$13
});
var SkillsRoute = Route$5.update({
	id: "/skills",
	path: "/skills",
	getParentRoute: () => Route$13
});
var TracksRoute = Route$4.update({
	id: "/tracks",
	path: "/tracks",
	getParentRoute: () => Route$13
});
var CompaniesIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => CompaniesRoute
});
var CompaniesIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => CompaniesRoute
});
var TracksIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => TracksRoute
});
var TracksIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => TracksRoute
});
var CompaniesRouteChildren = {
	CompaniesIdRoute,
	CompaniesIndexRoute
};
var CompaniesRouteWithChildren = CompaniesRoute._addFileChildren(CompaniesRouteChildren);
var TracksRouteChildren = {
	TracksIdRoute,
	TracksIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AiRoute,
	CompaniesRoute: CompaniesRouteWithChildren,
	CrashRoute,
	CurriculumRoute,
	ElectivesRoute,
	RoadmapRoute,
	SkillsRoute,
	TracksRoute: TracksRoute._addFileChildren(TracksRouteChildren)
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: AppNotFound
	});
}
//#endregion
export { tracks as a, cn as c, trackById as i, Route as n, useTrace as o, Route$2 as r, Button as s, router_exports as t };
