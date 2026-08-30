//#region node_modules/.nitro/vite/services/ssr/assets/electives-zdZtRjxh.js
var all = (tag) => ({
	embedded: tag,
	power: tag,
	drives: tag,
	control: tag,
	vlsi: tag,
	comms: tag,
	space: tag,
	analog: tag
});
var electives = [
	{
		code: "EE601",
		name: "Linear Systems Theory",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			control: "take",
			drives: "consider"
		},
		why: "State-space done properly. Take only if you are going controls/robotics/GNC. It will not help a PCB intern.",
		ai: "AI can grind the homeworks. The intern bar is whether you can identify a real plant."
	},
	{
		code: "EE602",
		name: "System Identification and Adaptive Control",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			control: "take",
			drives: "consider",
			space: "consider"
		},
		why: "Useful when the model is a lie — drones, rockets, motors. Pair with a hardware project or it is just papers.",
		ai: "AI writes the recursive-least-squares demo. You still have to pick the regressor on a noisy motor."
	},
	{
		code: "EE604",
		name: "Applied Linear Algebra",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			vlsi: "take",
			comms: "take",
			control: "take"
		},
		why: "The quiet multiplier for ML, DSP, and control. Take it if MA1021 felt thin. Skip if you already grind Gilbert Strang on your own.",
		ai: "AI does the row reduction. Geometric intuition still has to be yours."
	},
	{
		code: "EE605",
		name: "Optimization in Systems and Control",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			control: "take",
			power: "consider"
		},
		why: "MPC, resource allocation, some power dispatch. Good if you like math and might touch autonomy.",
		ai: "CVXPY/CasADi scaffolding is free now. Formulating the cost is not."
	},
	{
		code: "EE606",
		name: "Nonlinear Control",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			control: "take",
			drives: "consider",
			space: "consider"
		},
		why: "Drones, spacecraft attitude, motors at saturation. One of the few control electives that maps to a startup demo.",
		ai: "Lyapunov homework is automatable. Finding the region of attraction on a real quad is not."
	},
	{
		code: "EE607",
		name: "Artificial Intelligence and Machine Learning",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			comms: "take",
			control: "take",
			vlsi: "take",
			embedded: "consider"
		},
		why: "Take it as literacy, not as a career. Every founder in your list who is not doing hardware is doing this — and they hire CS. You take it so you can put a tiny model on an MCU or not get fooled.",
		ai: "The course content is what AI already does. Your edge is deploying it on a sensor, not beating CS students at Kaggle."
	},
	{
		code: "EE608",
		name: "Optimal and Robust Control",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			control: "take",
			space: "consider"
		},
		why: "H-infinity, LQR/LQG. GNC-adjacent. Skip unless you liked EE301 a lot.",
		ai: "Riccati solvers are a one-liner. Weight selection on a vehicle is the job."
	},
	{
		code: "EE610",
		name: "Power Systems Dynamics and Control",
		kind: "PC/PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			power: "consider"
		},
		why: "Grid, not startups. Take for Power Grid / Hitachi Energy / GE Vernova. Skip for Ather or Pixxel.",
		ai: "Load-flow is automated. Protection philosophy in a weak grid is not."
	},
	{
		code: "EE611",
		name: "Modelling and Analysis of Electrical Machines",
		kind: "PC/PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			drives: "take",
			power: "consider"
		},
		why: "If you want Naxatra, Ather motor team, or a drives PhD. Heavy on dq models.",
		ai: "dq-transform code is free. Parameter estimation on a hot motor is not."
	},
	{
		code: "EE612",
		name: "Insulation in Power Apparatus and System",
		kind: "PC/PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: all("skip"),
		why: "Utility / OEM (BHEL, CG, transformers). Almost no deeptech startup will ask. Skip unless that is the job you want.",
		ai: "Tables and standards lookup — AI. Field failures — human."
	},
	{
		code: "EE613",
		name: "Power Electronic Converters",
		kind: "PC/PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			power: "take",
			drives: "take",
			space: "take",
			analog: "consider"
		},
		why: "The PE to take. Chargers, EPS, inverters, electrolyzers. Pairs with EE311.",
		ai: "Topology selection from a blog post is easy. A layout that survives 100 kHz switching is not."
	},
	{
		code: "EE615",
		name: "Control of Electrical Drives",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			drives: "take",
			embedded: "consider",
			control: "consider"
		},
		why: "FOC, vector control, the EV elective. Take with a Nucleo motor kit or it stays theoretical.",
		ai: "Park/Clarke and a PI are Copilot. Field weakening on a scooter motor is you."
	},
	{
		code: "EE616",
		name: "Power Electronics for Renewable Energy Systems",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			power: "take",
			space: "consider"
		},
		why: "PV, wind, maybe hydrogen. Good for Ohmium / Cygni / inverter companies. Overlaps EE613 — don't take both unless power is the whole plan.",
		ai: "MPPT algorithms are textbook. Islanding and a dirty grid are not."
	},
	{
		code: "EE617",
		name: "Wide Area Power System Control",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			power: "consider"
		},
		why: "PMUs, grid. PSU/TSO path. Skip for startups.",
		ai: "Synchrophasor plots — AI. Operating a grid — human."
	},
	{
		code: "EE618",
		name: "FACTS and HVDC",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			power: "consider"
		},
		why: "Hitachi Energy, Siemens Energy, PGCIL. Not Skyroot. Take only for that job family.",
		ai: "Converter theory is in the notes. A 320 kV valve hall is not a copilot."
	},
	{
		code: "EE619",
		name: "Smart Grid Technology",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			power: "consider",
			embedded: "consider"
		},
		why: "AMI, DER, some embedded. Diluted. Prefer EE613 + a real meter/inverter project.",
		ai: "Architecture slides are AI-complete. A DLMS stack on a meter is not."
	},
	{
		code: "EE621",
		name: "Advance Digital Signal Processing",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			comms: "take",
			space: "take",
			vlsi: "consider"
		},
		why: "If EE322 clicked. SAR, wireless, audio, radar. Pair with EE629 lab if it exists.",
		ai: "Filter design functions are one line. A real-time implementation on an FPGA/DSP is the job."
	},
	{
		code: "EE622",
		name: "Electromagnetic Compatibility",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("take"),
			comms: "take",
			analog: "take",
			space: "take",
			power: "take"
		},
		why: "The sleeper. Every hardware startup fails EMC once. Almost no undergraduate takes this. If it is offered, take it — any track except pure theory.",
		ai: "AI auto-routes digital and still fails CISPR. You debug the cable."
	},
	{
		code: "EE624",
		name: "Image Signal Processing",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			comms: "take",
			space: "consider",
			control: "consider"
		},
		why: "Pixxel, Digantara, drones, inspection. More CS-adjacent. Take if you will actually code OpenCV/CUDA, not just attend.",
		ai: "OpenCV snippets and paper reimplementations are easy. A hyperspectral pipeline with calibration is not."
	},
	{
		code: "EE627",
		name: "Wireless Communication",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			comms: "take",
			space: "take",
			analog: "consider"
		},
		why: "Qualcomm, Tejas, satcom, TT&C. Pairs with EE321. Add a bit of RF or it stays equations.",
		ai: "Link-budget spreadsheets are easy. A fading channel you measured is not."
	},
	{
		code: "EE628",
		name: "Random Variables and Stochastic Processes",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("skip"),
			comms: "take",
			control: "consider",
			vlsi: "skip"
		},
		why: "If EE221 was not enough and you want comms/ML theory. Skip if you already did the work in 4th sem.",
		ai: "Problem sets — AI. Knowing which noise model your sensor actually has — you."
	},
	{
		code: "EE629",
		name: "Advanced Digital Signal Processing (lab)",
		kind: "PC",
		l: 0,
		t: 0,
		p: 3,
		c: 2,
		tracks: {
			...all("consider"),
			comms: "take",
			space: "take"
		},
		why: "2-credit lab. Take with EE621. Labs beat another theory PE for internships.",
		ai: "MATLAB live scripts are AI. The demo on hardware is the point."
	},
	{
		code: "EE661",
		name: "Digital VLSI Architecture Design",
		kind: "PE",
		l: 3,
		t: 0,
		p: 0,
		c: 3,
		tracks: {
			...all("consider"),
			vlsi: "take",
			embedded: "take",
			comms: "consider",
			space: "consider"
		},
		why: "FPGA/ASIC thinking. Even if you never tape out, this is how you write firmware-adjacent RTL for a camera or a motor controller.",
		ai: "RTL generation is getting good. Architecture (memory, pipeline, clocking) is still the interview."
	}
];
function electiveAdvice(track) {
	return {
		take: electives.filter((e) => e.tracks[track] === "take"),
		consider: electives.filter((e) => e.tracks[track] === "consider"),
		skip: electives.filter((e) => e.tracks[track] === "skip")
	};
}
//#endregion
export { electives as n, electiveAdvice as t };
