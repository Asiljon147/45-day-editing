export const phases = [
  { id: 1, name: 'Editing Intelligence', short: 'EDITING INTELLIGENCE', range: '01–07', color: 'blue' },
  { id: 2, name: 'Audio and Sound Design', short: 'AUDIO & SOUND DESIGN', range: '08–14', color: 'violet' },
  { id: 3, name: 'Typography and Motion Graphics', short: 'TYPE & MOTION', range: '15–21', color: 'blue' },
  { id: 4, name: 'Advanced Visual Control', short: 'VISUAL CONTROL', range: '22–30', color: 'violet' },
  { id: 5, name: 'Professional Storytelling', short: 'STORYTELLING', range: '31–37', color: 'blue' },
  { id: 6, name: 'Commercial Production', short: 'COMMERCIAL PRODUCTION', range: '38–45', color: 'violet' },
]
const titles = [
'J-cuts and L-cuts','Match cuts','Cut on action','Jump cuts and pacing','B-roll storytelling','Montage editing','Mini documentary project',
'Sound layering','Dialogue cleanup','EQ and compression','Audio mixing','Audio automation','Sound-to-visual synchronization','Sound-designed sequence project',
'Typography hierarchy','Kinetic typography','Keyframe animation','Bezier curves and easing','Shape animation','Custom transitions','Typography advertisement project',
'Speed ramping','Time remapping','Advanced masking','Mask tracking','Compositing','Color correction','Lumetri scopes','Shot matching','Cinematic sequence project',
'Footage selection','Narrative structure','Documentary editing','Emotional pacing','Motion graphics workflow','Advanced workflow','Professional review',
'Advertisement analysis','Creative direction','Commercial editing — first cut','Advanced commercial sound','Commercial visual polish','Client revisions','Professional delivery','Final commercial advertisement'
]
const phaseGoals = [
'Build editorial instincts by controlling continuity, rhythm, and visual information.',
'Create intentional sound perspective, clean dialogue, and a balanced mix.',
'Communicate with type and motion while keeping animation purposeful and readable.',
'Control time, layers, masks, and color with precision across multiple shots.',
'Shape raw footage into a coherent story with a deliberate emotional arc.',
'Work through a commercial brief from concept to polished, client-ready delivery.'
]
const tasks = [
'Create a two-person conversation from separate clips. Let the incoming audio lead the picture on one edit and let the outgoing audio continue over the next shot. Export a 20–30 second sequence.',
'Find two shots connected by shape, movement, framing, or color. Build a clean visual match and refine the cut until the transition feels motivated.',
'Cut during a subject movement so the action flows across two camera angles. Compare the result with a cut made before the movement.',
'Build a short talking-head sequence using purposeful jump cuts. Vary pauses and shot scale to maintain pace without making the edit feel frantic.',
'Cover an interview or voiceover with relevant B-roll. Make every insert add information, context, or emotion rather than simply hiding a cut.',
'Edit a sequence to music using wide, medium, and detail shots. Create a clear beginning, build, peak, and ending through shot length and selection.',
'Produce a 60–90 second mini documentary with an opening hook, a clear subject, a middle progression, and a resolved ending. Combine interview, natural sound, and B-roll.',
'Build a layered sound bed from ambience, effects, and music. Use levels and timing to establish depth without clutter.',
'Clean a spoken recording: reduce steady noise, remove distracting breaths and clicks selectively, and preserve a natural voice tone.',
'Use EQ to remove rumble and improve intelligibility, then apply gentle compression to control dynamic range. Compare bypassed and processed audio.',
'Mix dialogue, music, ambience, and effects into a coherent hierarchy. Keep speech intelligible and check the mix on headphones and speakers.',
'Use volume keyframes to shape fades, duck music under dialogue, and create intentional transitions between sound elements.',
'Edit sound effects and visual events together. Make impacts, movement, and transitions feel synchronized without every sound landing mechanically on a cut.',
'Create a 30–60 second sequence with designed ambience, layered Foley, transitions, and a balanced final mix. Deliver a clean stereo export.',
'Create a type system with headline, supporting text, and detail levels. Test contrast, alignment, spacing, and readability at phone size.',
'Animate a short phrase so the movement reinforces meaning. Control timing, stagger, and hierarchy; avoid motion that competes with the message.',
'Animate position, scale, rotation, and opacity with keyframes. Build a reusable 5–8 second motion study with clear start, middle, and end states.',
'Refine keyframe interpolation using Bezier handles and easing. Compare linear, ease-in, ease-out, and custom curves for the same move.',
'Build animated shapes that reveal, frame, or emphasize content. Use anchor points, masks, and timing to keep the design deliberate.',
'Design two custom transitions using masks, shape layers, or animated transforms. Each transition must suit the footage and preserve continuity.',
'Create a 15–20 second typography-led advertisement. Use a clear message, visual hierarchy, purposeful motion, sound, and a consistent design system.',
'Create a speed ramp that accelerates into an action and settles smoothly. Use time remapping and carefully placed speed points; avoid abrupt motion.',
'Use time remapping for a controlled speed change and a freeze or reverse moment. Maintain believable motion and check for frame blending artifacts.',
'Build a multi-layer mask reveal or isolation effect. Refine edges, feathering, expansion, and shape animation on moving footage.',
'Track a mask across a moving subject, inspect difficult frames, and manually correct drift. Export a short before/after comparison.',
'Combine at least three visual elements into one believable composite. Match scale, perspective, edge treatment, light, and color.',
'Correct exposure and white balance before adding a restrained creative look. Work shot by shot and preserve natural skin tones.',
'Read waveform, RGB parade, and vectorscope to diagnose exposure, channel balance, and saturation. Make corrections based on scopes, not guesswork.',
'Match three or more shots from different lighting conditions. Establish consistent exposure and color while preserving each shot’s natural character.',
'Create a 45–60 second cinematic sequence combining controlled speed, masks or compositing, shot matching, sound, and intentional pacing.',
'Review a footage bin and select only usable takes. Organize selects by scene, angle, performance, and story value; explain key choices.',
'Outline a beginning, turning point, and ending before editing. Build a paper edit or beat sheet and map footage to each story beat.',
'Edit a 2–3 minute documentary from a supplied or self-shot set. Prioritize clarity, factual continuity, interview flow, and meaningful supporting images.',
'Recut a scene twice with different emotional pacing. Use shot duration, reaction shots, silence, and music to change the audience’s response.',
'Create a repeatable motion graphics workflow using templates, naming conventions, pre-comps or nested sequences, and consistent typography.',
'Complete a timed edit using organized bins, proxies if needed, keyboard shortcuts, versioning, and a clean sequence structure. Document bottlenecks.',
'Run a structured review of a near-final edit. Check story, picture, audio, graphics, color, continuity, and technical delivery; log fixes by priority.',
'Deconstruct a 15–30 second advertisement. Identify audience, proposition, hook, pacing, visual language, sound strategy, and call to action.',
'Write a concise creative brief for a product or service. Define audience, message, tone, visual references, deliverables, and a practical shot list.',
'Assemble the first cut of a 20–30 second commercial from a brief. Prioritize message clarity and story flow over effects or polish.',
'Build a commercial sound pass with a strong dialogue or voiceover anchor, designed transitions, Foley, ambience, and music that supports the brand tone.',
'Polish the commercial with consistent color, refined graphics, clean transitions, precise timing, and frame-by-frame quality checks.',
'Apply a simulated client feedback round. Separate essential changes from subjective preferences, make revisions, and keep a versioned change log.',
'Prepare delivery versions with correct codec, resolution, frame rate, audio settings, file naming, and organized project assets. Verify every export.',
'Produce a finished 30–45 second commercial from brief to final delivery. Include a clear hook, product story, sound design, visual polish, and final quality-control pass.'
]
const deliverables = [
'20–30 sec dialogue edit with audible J/L transitions','Two-shot match cut sequence','10–20 sec action cut comparison','30 sec paced talking-head edit','30–45 sec B-roll story','30–45 sec music montage','60–90 sec mini documentary',
'20 sec layered sound study','Cleaned dialogue clip','Processed voice sample + settings note','Balanced 30 sec mix','Automation pass with keyframes','Synced action sequence','30–60 sec sound-designed sequence',
'Type hierarchy frame / style sheet','5–8 sec kinetic type animation','5–8 sec keyframe study','Curve comparison + final animation','Shape animation study','Two custom transitions','15–20 sec typography ad',
'10–15 sec speed ramp','Time-remapped clip','Masked reveal composite','Tracked mask clip','Composite shot','Corrected 3-shot sequence','Scope-guided correction stills','Matched 3-shot sequence','45–60 sec cinematic sequence',
'Organized selects and notes','Beat sheet / paper edit','2–3 min documentary','Two emotional scene versions','Reusable graphics workflow','Organized project + workflow notes','Review checklist and revised export',
'Ad breakdown sheet','Creative brief + shot list','20–30 sec commercial first cut','Commercial sound pass','Polished commercial picture pass','Revised cut + change log','Verified delivery package','30–45 sec final commercial'
]
const times = [35,35,30,40,50,60,150,35,40,45,45,35,45,90,35,50,45,50,45,60,100,50,45,60,60,75,60,45,60,150,45,60,120,60,60,75,60,45,60,120,60,75,60,60,180]
export const curriculum = titles.map((title, i) => {
  const phase = i < 7 ? 0 : i < 14 ? 1 : i < 21 ? 2 : i < 30 ? 3 : i < 37 ? 4 : 5
  const isProject = [6,13,20,29,44].includes(i)
  return { day: i + 1, title, phase: phase + 1, description: `${phaseGoals[phase]} ${isProject ? 'This milestone combines the skills from the phase into one complete, reviewable piece.' : 'Focus on one deliberate technique, then repeat it until you can explain why the edit works.'}`, objective: `Demonstrate practical control of ${title.toLowerCase()} and explain the creative decisions behind the result.`, task: tasks[i], deliverable: deliverables[i], minutes: times[i], difficulty: i < 7 ? (i < 3 ? 1 : 2) : i < 21 ? (i < 14 ? 2 : 3) : i < 30 ? 4 : i < 37 ? 4 : 5, criteria: ['The technique is intentional and technically clean.','Timing, continuity, and visual or audio quality feel controlled.','The result supports the story or communication goal.','The exported deliverable is reviewed and named clearly.'], concepts: [title, phaseGoals[phase], isProject ? 'Project integration and quality control' : 'Repeatable workflow and critical review'] }
})
export const projects = [
  { id: 'mini-doc', title: 'Mini documentary', day: 7, subtitle: 'A short, coherent story built from interview, B-roll, and natural sound.' },
  { id: 'sound-sequence', title: 'Sound-designed sequence', day: 14, subtitle: 'A layered audio-led sequence with clean dialogue and intentional sound perspective.' },
  { id: 'type-ad', title: 'Typography advertisement', day: 21, subtitle: 'A concise message expressed through hierarchy, kinetic type, and motion.' },
  { id: 'cinematic', title: 'Cinematic sequence', day: 30, subtitle: 'A polished sequence integrating advanced visual control and storytelling.' },
  { id: 'final-ad', title: 'Final commercial advertisement', day: 45, subtitle: 'A complete commercial taken from creative brief to verified final delivery.' },
]
