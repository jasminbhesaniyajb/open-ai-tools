export type Pricing = "free" | "freemium" | "paid" | "free-trial";

export interface Category {
  slug: string;
  name: string;
  icon: string;
  blurb: string;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: Pricing;
  url: string;
  logo?: string;
  features: string[];
  featured?: boolean;
  rating: number;
}

export const PRICING_LABELS: Record<Pricing, string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
  "free-trial": "Free trial",
};

export function getLogoCandidates(url: string): string[] {
  try {
    const parsed = new URL(url);
    const origin = `${parsed.protocol}//${parsed.host}`;

    return [
      `${origin}/favicon.ico`,
      `${origin}/favicon.svg`,
      `${origin}/icon.png`,
      `${origin}/apple-touch-icon.png`,
      `${origin}/logo.svg`,
      `${origin}/logo.png`,
    ];
  } catch {
    return [];
  }
}

export const CATEGORIES: Category[] = [
  { slug: "chat-assistants", name: "AI chat & assistants", icon: "💬", blurb: "Conversational AI assistants for questions, brainstorming, and everyday tasks." },
  { slug: "image-generation", name: "Image generation", icon: "🎨", blurb: "Create stunning artwork, photos, and illustrations from text prompts." },
  { slug: "video-tools", name: "Video generation & editing", icon: "🎬", blurb: "Generate and edit video with AI — from text-to-video to smart editing." },
  { slug: "audio-music", name: "Audio & music", icon: "🎵", blurb: "Compose music, generate songs, and produce audio with AI." },
  { slug: "voice-speech", name: "Voice & speech", icon: "🎙️", blurb: "Text-to-speech, voice cloning, and transcription tools." },
  { slug: "writing-content", name: "Writing & content", icon: "✍️", blurb: "Write, rewrite, and polish copy, blogs, and marketing content." },
  { slug: "coding-development", name: "Coding & development", icon: "👨‍💻", blurb: "AI pair programmers, code generators, and app builders." },
  { slug: "productivity", name: "Productivity", icon: "⚡", blurb: "Meeting notes, scheduling, and workflow boosters powered by AI." },
  { slug: "automation-agents", name: "Automation & agents", icon: "🤖", blurb: "Automate workflows and build AI agents without heavy engineering." },
  { slug: "presentations", name: "Presentations", icon: "📊", blurb: "Generate beautiful decks and documents in minutes." },
  { slug: "seo-marketing", name: "SEO & marketing", icon: "📈", blurb: "Rank higher and market smarter with AI-driven insights." },
  { slug: "design-tools", name: "Design", icon: "🖌️", blurb: "AI design assistants, background removal, and creative suites." },
  { slug: "research-search", name: "Research & search", icon: "🔎", blurb: "AI answer engines and research copilots with cited sources." },
  { slug: "data-analytics", name: "Data & analytics", icon: "📉", blurb: "Analyze data, build reports, and enrich spreadsheets with AI." },
  { slug: "education", name: "Education", icon: "🎓", blurb: "AI tutors and learning companions for students and teachers." },
  { slug: "business-sales", name: "Business & sales", icon: "💼", blurb: "Prospecting, outreach, and revenue intelligence powered by AI." },
];

export const TOOLS: Tool[] = [
  // ── AI chat & assistants ─────────────────────────────────────────────
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "The most popular AI assistant for writing, coding, and analysis.",
    description:
      "ChatGPT by OpenAI is a conversational AI assistant that helps with writing, coding, research, image generation, and data analysis. The free tier includes GPT-class models, while Plus unlocks the most capable models, higher limits, and advanced tools.",
    category: "chat-assistants",
    pricing: "freemium",
    url: "https://chatgpt.com",
    features: ["Natural conversations with memory", "Code generation and debugging", "Image generation built in", "Web browsing and file analysis"],
    featured: true,
    rating: 4.8,
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Anthropic's AI assistant known for nuanced writing and coding.",
    description:
      "Claude by Anthropic excels at long-document analysis, thoughtful writing, and complex coding tasks. Its large context window lets you work with entire books or codebases, and Artifacts turn answers into interactive documents and apps.",
    category: "chat-assistants",
    pricing: "freemium",
    url: "https://claude.ai",
    features: ["Very large context window", "Artifacts for interactive outputs", "Strong coding and reasoning", "Projects and team collaboration"],
    featured: true,
    rating: 4.8,
  },
  {
    slug: "google-gemini",
    name: "Google Gemini",
    tagline: "Google's multimodal AI assistant integrated across its ecosystem.",
    description:
      "Gemini is Google's flagship AI assistant, deeply integrated with Search, Gmail, Docs, and Android. It handles text, images, audio, and video in one place, and the Advanced tier adds Google's most capable models with a huge context window.",
    category: "chat-assistants",
    pricing: "freemium",
    url: "https://gemini.google.com",
    features: ["Multimodal understanding", "Google Workspace integration", "Live voice conversations", "Deep Research reports"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    tagline: "AI companion built into Windows, Edge, and Microsoft 365.",
    description:
      "Microsoft Copilot brings GPT-powered assistance to Windows, Edge, and Office apps. Draft documents in Word, summarize threads in Outlook, and build slides in PowerPoint — all with natural language.",
    category: "chat-assistants",
    pricing: "freemium",
    url: "https://copilot.microsoft.com",
    features: ["Built into Windows and Office", "Document drafting in Word", "Email summarization in Outlook", "Free image creation"],
    rating: 4.4,
  },
  {
    slug: "poe",
    name: "Poe",
    tagline: "One subscription, every major AI model in a single app.",
    description:
      "Poe by Quora gives you access to ChatGPT, Claude, Gemini, Llama, and dozens of other models from one interface. Compare answers across models, build custom bots, and share them with the community.",
    category: "chat-assistants",
    pricing: "freemium",
    url: "https://poe.com",
    features: ["Access many models in one app", "Custom bot creation", "Cross-model comparisons", "Community bot marketplace"],
    rating: 4.3,
  },
  {
    slug: "meta-ai",
    name: "Meta AI",
    tagline: "Free AI assistant across WhatsApp, Instagram, and the web.",
    description:
      "Meta AI, powered by Llama models, is a free assistant available on the web and inside WhatsApp, Instagram, and Messenger. Ask questions, generate images, and get help without any subscription.",
    category: "chat-assistants",
    pricing: "free",
    url: "https://www.meta.ai",
    features: ["Completely free to use", "Works inside WhatsApp and Instagram", "Fast image generation", "Powered by open Llama models"],
    rating: 4.1,
  },

  // ── Image generation ────────────────────────────────────────────────
  {
    slug: "midjourney",
    name: "Midjourney",
    tagline: "The gold standard for artistic AI image generation.",
    description:
      "Midjourney produces some of the most beautiful, stylized AI images available. Loved by designers and artists, it offers powerful style controls, character consistency, and an active community for inspiration.",
    category: "image-generation",
    pricing: "paid",
    url: "https://www.midjourney.com",
    features: ["Best-in-class aesthetic quality", "Style and character consistency", "Web editor with pan and zoom", "Active creative community"],
    featured: true,
    rating: 4.7,
  },
  {
    slug: "dall-e-3",
    name: "DALL·E 3",
    tagline: "OpenAI's image model with excellent prompt understanding.",
    description:
      "DALL·E 3 by OpenAI turns detailed prompts into accurate images and is available directly inside ChatGPT. It excels at following complex instructions and rendering legible text within images.",
    category: "image-generation",
    pricing: "freemium",
    url: "https://openai.com/dall-e-3",
    features: ["Superb prompt adherence", "Text rendering inside images", "Built into ChatGPT", "Inpainting and edits"],
    rating: 4.5,
  },
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "The leading open-source image model you can run anywhere.",
    description:
      "Stable Diffusion is a free, open-source image generation model. Run it locally, fine-tune it on your own style, or use it through hundreds of community interfaces — no subscription required.",
    category: "image-generation",
    pricing: "free",
    url: "https://stability.ai",
    features: ["Open source and free", "Run locally on your GPU", "Custom fine-tuning (LoRA)", "Huge ecosystem of tools"],
    rating: 4.4,
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    tagline: "Production-grade image generation for creators and game studios.",
    description:
      "Leonardo AI offers fine-tuned models, real-time canvas editing, and consistent character generation. Its generous free tier and production pipeline features make it a favorite for game assets and marketing visuals.",
    category: "image-generation",
    pricing: "freemium",
    url: "https://leonardo.ai",
    features: ["Daily free generation credits", "Real-time canvas editing", "Fine-tuned style models", "3D texture generation"],
    rating: 4.5,
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    tagline: "Commercially safe AI images integrated with Creative Cloud.",
    description:
      "Adobe Firefly is trained on licensed content, making it safe for commercial work. Generative Fill in Photoshop and text effects in Express bring Firefly's power directly into tools designers already use.",
    category: "image-generation",
    pricing: "freemium",
    url: "https://www.adobe.com/products/firefly.html",
    features: ["Commercially safe training data", "Generative Fill in Photoshop", "Text effects and recoloring", "Creative Cloud integration"],
    rating: 4.3,
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    tagline: "AI images with the best text rendering in the business.",
    description:
      "Ideogram specializes in generating images that contain accurate, stylish typography — perfect for posters, logos, and social graphics. Its free tier makes experimenting easy.",
    category: "image-generation",
    pricing: "freemium",
    url: "https://ideogram.ai",
    features: ["Industry-best text in images", "Poster and logo styles", "Magic prompt enhancement", "Free daily generations"],
    rating: 4.4,
  },

  // ── Video generation & editing ──────────────────────────────────────
  {
    slug: "runway",
    name: "Runway",
    tagline: "Professional AI video generation and editing suite.",
    description:
      "Runway pioneered AI video with its Gen models, offering text-to-video, video-to-video, and a full suite of magic editing tools. Used in real film productions, it's the professional's choice for AI video.",
    category: "video-tools",
    pricing: "freemium",
    url: "https://runwayml.com",
    features: ["Gen-4 text-to-video", "Motion brush and camera controls", "Green screen and inpainting", "Used in film production"],
    featured: true,
    rating: 4.5,
  },
  {
    slug: "sora",
    name: "Sora",
    tagline: "OpenAI's cinematic text-to-video model.",
    description:
      "Sora generates remarkably coherent, cinematic video clips from text prompts. Available to ChatGPT subscribers, it includes a storyboard tool for directing multi-shot sequences.",
    category: "video-tools",
    pricing: "paid",
    url: "https://sora.com",
    features: ["Cinematic video quality", "Storyboard sequencing", "Remix and blend tools", "Included with ChatGPT Plus/Pro"],
    rating: 4.4,
  },
  {
    slug: "pika",
    name: "Pika",
    tagline: "Fun, fast AI video generation with creative effects.",
    description:
      "Pika makes AI video accessible with playful effects like Pikaffects — squish, melt, or explode any subject. Fast generations and a friendly interface make it perfect for social content.",
    category: "video-tools",
    pricing: "freemium",
    url: "https://pika.art",
    features: ["Creative Pikaffects", "Fast generation times", "Lip sync and sound effects", "Social-ready formats"],
    rating: 4.2,
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    tagline: "Studio-quality AI avatar videos from plain text.",
    description:
      "Synthesia turns scripts into presenter-led videos with realistic AI avatars in 140+ languages. Enterprises use it for training, onboarding, and product videos without cameras or studios.",
    category: "video-tools",
    pricing: "paid",
    url: "https://www.synthesia.io",
    features: ["230+ realistic AI avatars", "140+ languages and accents", "Custom avatar creation", "Enterprise-grade security"],
    rating: 4.5,
  },
  {
    slug: "heygen",
    name: "HeyGen",
    tagline: "AI avatars and video translation with perfect lip sync.",
    description:
      "HeyGen creates avatar videos and translates existing footage into 40+ languages with natural lip sync. Its instant avatar feature clones you from a short recording.",
    category: "video-tools",
    pricing: "freemium",
    url: "https://www.heygen.com",
    features: ["Video translation with lip sync", "Instant personal avatars", "Interactive avatar API", "Free tier to start"],
    rating: 4.4,
  },
  {
    slug: "luma-dream-machine",
    name: "Luma Dream Machine",
    tagline: "High-quality text and image to video, free to try.",
    description:
      "Luma's Dream Machine generates smooth, physically plausible video from text or images. Its free tier and intuitive boards make it one of the easiest ways to start creating AI video.",
    category: "video-tools",
    pricing: "freemium",
    url: "https://lumalabs.ai/dream-machine",
    features: ["Image-to-video animation", "Natural motion physics", "Brainstorm boards", "Generous free tier"],
    rating: 4.3,
  },
  {
    slug: "descript",
    name: "Descript",
    tagline: "Edit video and podcasts by editing the transcript.",
    description:
      "Descript transcribes your media, then lets you edit video and audio by deleting words from the text. Studio Sound, filler-word removal, and AI voice cloning make post-production dramatically faster.",
    category: "video-tools",
    pricing: "freemium",
    url: "https://www.descript.com",
    features: ["Text-based video editing", "Studio Sound enhancement", "Filler word removal", "Overdub voice cloning"],
    rating: 4.5,
  },

  // ── Audio & music ───────────────────────────────────────────────────
  {
    slug: "suno",
    name: "Suno",
    tagline: "Generate complete songs with vocals from a text prompt.",
    description:
      "Suno creates full songs — vocals, lyrics, and instrumentals — from simple descriptions. Pick a genre, describe a mood, and get radio-ready tracks in seconds.",
    category: "audio-music",
    pricing: "freemium",
    url: "https://suno.com",
    features: ["Full songs with vocals", "Custom lyrics mode", "Dozens of genres", "Free daily credits"],
    featured: true,
    rating: 4.5,
  },
  {
    slug: "udio",
    name: "Udio",
    tagline: "Studio-quality AI music generation for creators.",
    description:
      "Udio generates high-fidelity music with impressive vocal quality and genre control. Extend tracks, remix sections, and download stems for further production.",
    category: "audio-music",
    pricing: "freemium",
    url: "https://www.udio.com",
    features: ["High-fidelity audio output", "Track extensions and remixes", "Fine genre control", "Free tier available"],
    rating: 4.3,
  },
  {
    slug: "aiva",
    name: "AIVA",
    tagline: "AI composer for cinematic and orchestral music.",
    description:
      "AIVA composes emotional soundtrack music in 250+ styles. Designed for film, games, and ads, it gives you full editing control over generated compositions plus MIDI export.",
    category: "audio-music",
    pricing: "freemium",
    url: "https://www.aiva.ai",
    features: ["250+ musical styles", "MIDI editing and export", "Influence-based composition", "Royalty options for creators"],
    rating: 4.2,
  },

  // ── Voice & speech ──────────────────────────────────────────────────
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "The most realistic AI voices and voice cloning available.",
    description:
      "ElevenLabs sets the bar for lifelike text-to-speech in 30+ languages. Clone your own voice, dub videos, build conversational agents, and generate sound effects — all from one platform.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://elevenlabs.io",
    features: ["Ultra-realistic voices", "Instant voice cloning", "AI dubbing in 30+ languages", "Conversational agent API"],
    featured: true,
    rating: 4.7,
  },
  {
    slug: "murf-ai",
    name: "Murf AI",
    tagline: "Professional voiceovers for videos, ads, and e-learning.",
    description:
      "Murf offers 200+ studio-quality voices with precise control over pitch, pace, and emphasis. Its editor syncs voiceovers to your video or slides, making it a favorite for e-learning teams.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://murf.ai",
    features: ["200+ natural voices", "Pitch and emphasis control", "Video and slide sync", "Team collaboration"],
    rating: 4.4,
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "Real-time meeting transcription with AI summaries.",
    description:
      "Otter joins your meetings, transcribes them live, and produces automatic summaries with action items. Search every word ever said in your meetings and ask OtterPilot questions about past calls.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://otter.ai",
    features: ["Live meeting transcription", "Automated summaries", "Action item capture", "Searchable meeting history"],
    rating: 4.4,
  },
  {
    slug: "fireflies-ai",
    name: "Fireflies.ai",
    tagline: "AI notetaker that records, transcribes, and analyzes meetings.",
    description:
      "Fireflies captures meetings across Zoom, Meet, and Teams, delivering transcripts, smart summaries, and conversation analytics. Its AskFred assistant answers questions about any past meeting.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://fireflies.ai",
    features: ["Works with all major platforms", "Smart summaries and topics", "Conversation intelligence", "CRM integrations"],
    rating: 4.4,
  },

  // ── Writing & content ───────────────────────────────────────────────
  {
    slug: "grammarly",
    name: "Grammarly",
    tagline: "AI writing assistant that polishes everything you type.",
    description:
      "Grammarly checks grammar, clarity, and tone everywhere you write — from email to docs. Its generative AI drafts, rewrites, and replies for you while keeping your personal voice.",
    category: "writing-content",
    pricing: "freemium",
    url: "https://www.grammarly.com",
    features: ["Grammar and clarity fixes", "Tone adjustment", "Works across all apps", "AI drafting and rewriting"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "Enterprise AI copilot for on-brand marketing content.",
    description:
      "Jasper helps marketing teams produce on-brand content at scale. Brand voice training, campaign workflows, and 80+ templates cover everything from ads to long-form blogs.",
    category: "writing-content",
    pricing: "paid",
    url: "https://www.jasper.ai",
    features: ["Brand voice training", "80+ content templates", "Campaign workflows", "Team collaboration"],
    rating: 4.3,
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "GTM AI platform for sales and marketing copy at scale.",
    description:
      "Copy.ai combines content generation with go-to-market workflows. Generate ad copy, emails, and blogs, then chain them into automated pipelines that enrich leads and personalize outreach.",
    category: "writing-content",
    pricing: "freemium",
    url: "https://www.copy.ai",
    features: ["Workflow automation", "Sales and marketing templates", "Brand voice controls", "Free forever plan"],
    rating: 4.3,
  },
  {
    slug: "quillbot",
    name: "QuillBot",
    tagline: "Paraphrase, summarize, and improve any text instantly.",
    description:
      "QuillBot's paraphraser rewrites sentences in nine different modes, from formal to creative. Add its grammar checker, summarizer, and citation generator for a complete writing toolkit — much of it free.",
    category: "writing-content",
    pricing: "freemium",
    url: "https://quillbot.com",
    features: ["9 paraphrasing modes", "Summarizer and grammar check", "Citation generator", "Generous free tier"],
    rating: 4.4,
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    tagline: "SEO-focused AI writer with real-time web research.",
    description:
      "Writesonic generates fact-checked, SEO-optimized articles with citations from live web data. Built-in keyword research and Chatsonic's search abilities make it a strong pick for content teams.",
    category: "writing-content",
    pricing: "freemium",
    url: "https://writesonic.com",
    features: ["SEO-optimized long-form", "Live web citations", "Keyword research built in", "Bulk content generation"],
    rating: 4.2,
  },
  {
    slug: "rytr",
    name: "Rytr",
    tagline: "Budget-friendly AI writer with 40+ use cases.",
    description:
      "Rytr generates emails, ads, blogs, and more across 40+ use cases and 30+ languages. Its free plan and low-cost unlimited tier make it one of the most affordable AI writers.",
    category: "writing-content",
    pricing: "freemium",
    url: "https://rytr.me",
    features: ["40+ writing use cases", "30+ languages", "Custom tone matching", "Very affordable pricing"],
    rating: 4.1,
  },

  // ── Coding & development ────────────────────────────────────────────
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "The world's most widely adopted AI pair programmer.",
    description:
      "GitHub Copilot autocompletes code, answers questions, and now works as an autonomous agent on issues. Deep integration with VS Code, JetBrains, and github.com makes it the default choice for millions of developers.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://github.com/features/copilot",
    features: ["Inline code completions", "Copilot Chat in your IDE", "Agent mode for issues", "Free tier for everyone"],
    featured: true,
    rating: 4.5,
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor developers are switching to.",
    description:
      "Cursor is a fork of VS Code rebuilt around AI. Its agent writes multi-file changes, predicts your next edit, and understands your entire codebase — making it the fastest-growing editor among professional developers.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://cursor.com",
    features: ["Whole-codebase understanding", "Agent mode for big changes", "Next-edit prediction", "Familiar VS Code base"],
    featured: true,
    rating: 4.7,
  },
  {
    slug: "v0",
    name: "v0",
    tagline: "Generate production React UI from text prompts.",
    description:
      "v0 by Vercel turns descriptions into working React components with Tailwind and shadcn/ui. Iterate in chat, preview instantly, and ship straight to Vercel — perfect for prototyping real products.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://v0.dev",
    features: ["React + Tailwind output", "shadcn/ui components", "Full-stack app generation", "One-click Vercel deploy"],
    rating: 4.4,
  },
  {
    slug: "lovable",
    name: "Lovable",
    tagline: "Build full-stack web apps by chatting — no code needed.",
    description:
      "Lovable turns plain-English ideas into complete web apps with auth, database, and hosting via Supabase. Non-technical founders use it to ship real products in days instead of months.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://lovable.dev",
    features: ["Full-stack app generation", "Supabase auth and database", "GitHub sync", "Live preview editing"],
    rating: 4.4,
  },
  {
    slug: "replit",
    name: "Replit",
    tagline: "Code, deploy, and host from your browser with AI agents.",
    description:
      "Replit combines a cloud IDE with an AI agent that builds entire apps from prompts. Databases, auth, and deployments are built in, so you go from idea to live URL in one place.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://replit.com",
    features: ["AI agent app building", "Zero-setup cloud IDE", "Built-in deployments", "Multiplayer coding"],
    rating: 4.3,
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    tagline: "Agentic IDE with free unlimited AI completions.",
    description:
      "Windsurf (formerly Codeium) pairs a polished IDE with Cascade, an agent that plans and executes multi-step coding tasks. Its generous free tier includes unlimited completions.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://windsurf.com",
    features: ["Cascade agentic workflows", "Unlimited free completions", "Deep context awareness", "JetBrains and VS Code plugins"],
    rating: 4.4,
  },

  // ── Productivity ────────────────────────────────────────────────────
  {
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "AI writing, search, and meeting notes inside your workspace.",
    description:
      "Notion AI answers questions from your docs, drafts content in place, and auto-fills databases. Enterprise search connects Slack and Drive so one query searches everything your team knows.",
    category: "productivity",
    pricing: "paid",
    url: "https://www.notion.com/product/ai",
    features: ["Q&A over your workspace", "Inline writing assistance", "Database autofill", "Connected enterprise search"],
    rating: 4.4,
  },
  {
    slug: "motion",
    name: "Motion",
    tagline: "AI calendar that plans your day and protects deep work.",
    description:
      "Motion automatically schedules tasks around meetings, reshuffling your calendar as priorities change. Teams use it to hit deadlines without micromanaging schedules.",
    category: "productivity",
    pricing: "paid",
    url: "https://www.usemotion.com",
    features: ["Automatic task scheduling", "Deadline-aware planning", "Meeting booking pages", "Team workload balancing"],
    rating: 4.2,
  },
  {
    slug: "reclaim-ai",
    name: "Reclaim AI",
    tagline: "Smart scheduling that defends time for habits and tasks.",
    description:
      "Reclaim finds the best time for tasks, habits, and breaks on your Google Calendar and defends it automatically. Free to start, it's the easiest way to reclaim hours every week.",
    category: "productivity",
    pricing: "freemium",
    url: "https://reclaim.ai",
    features: ["Habit and task auto-scheduling", "Smart meeting defense", "Buffer time management", "Free plan available"],
    rating: 4.3,
  },
  {
    slug: "fathom",
    name: "Fathom",
    tagline: "Free AI meeting notetaker with instant summaries.",
    description:
      "Fathom records, transcribes, and summarizes your calls with remarkably good free coverage. Get instant action items and sync highlights straight to your CRM.",
    category: "productivity",
    pricing: "freemium",
    url: "https://fathom.video",
    features: ["Unlimited free recordings", "Instant AI summaries", "Action item detection", "CRM sync"],
    rating: 4.6,
  },

  // ── Automation & agents ─────────────────────────────────────────────
  {
    slug: "zapier",
    name: "Zapier",
    tagline: "Connect 8,000+ apps with AI-powered automation.",
    description:
      "Zapier automates workflows across more apps than any other platform. Its AI builder writes Zaps from plain English, and Agents handle multi-step work like research and drafting autonomously.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://zapier.com",
    features: ["8,000+ app integrations", "AI workflow builder", "Autonomous agents", "Tables, interfaces, and chatbots"],
    featured: true,
    rating: 4.5,
  },
  {
    slug: "make",
    name: "Make",
    tagline: "Visual automation platform for complex scenarios.",
    description:
      "Make lets you design powerful multi-branch automations on a visual canvas. Advanced logic, iterators, and AI modules give power users far more control than simple triggers.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://www.make.com",
    features: ["Visual scenario builder", "Advanced branching logic", "AI app integrations", "Generous free tier"],
    rating: 4.4,
  },
  {
    slug: "gumloop",
    name: "Gumloop",
    tagline: "Drag-and-drop AI workflows for scraping, SEO, and ops.",
    description:
      "Gumloop specializes in AI-native automation — web scraping, document processing, and content pipelines built from modular nodes. Non-engineers ship automations that used to need Python.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://www.gumloop.com",
    features: ["AI-native workflow nodes", "Web scraping built in", "Document processing", "Chrome extension triggers"],
    rating: 4.3,
  },
  {
    slug: "n8n",
    name: "n8n",
    tagline: "Open-source workflow automation you can self-host free.",
    description:
      "n8n is a fair-code automation platform with 400+ integrations and native AI agent nodes. Self-host it for free with unlimited executions, or use its cloud for convenience.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://n8n.io",
    features: ["Free self-hosting", "AI agent nodes with LangChain", "400+ integrations", "Code when you need it"],
    rating: 4.5,
  },

  // ── Presentations ───────────────────────────────────────────────────
  {
    slug: "gamma",
    name: "Gamma",
    tagline: "Generate beautiful presentations, docs, and sites from a prompt.",
    description:
      "Gamma creates polished decks, documents, and even websites from a single prompt. Its card-based format, one-click restyling, and analytics have made it the breakout AI presentation tool.",
    category: "presentations",
    pricing: "freemium",
    url: "https://gamma.app",
    features: ["One-prompt full decks", "Docs and website modes", "One-click restyling", "Engagement analytics"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "tome",
    name: "Tome",
    tagline: "AI storytelling format for pitches and narratives.",
    description:
      "Tome generates narrative-driven presentations with AI text and imagery on an elegant canvas. It's built for founders and sellers who want stories, not bullet points.",
    category: "presentations",
    pricing: "freemium",
    url: "https://tome.app",
    features: ["Narrative-first generation", "AI images per slide", "Interactive embeds", "Mobile-responsive decks"],
    rating: 4.2,
  },
  {
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    tagline: "Slides that design themselves as you add content.",
    description:
      "Beautiful.ai applies smart design rules so every slide stays perfectly formatted as you edit. DesignerBot drafts complete presentations, and team templates keep branding consistent.",
    category: "presentations",
    pricing: "paid",
    url: "https://www.beautiful.ai",
    features: ["Auto-adapting smart slides", "DesignerBot deck drafts", "Brand template locking", "PowerPoint import/export"],
    rating: 4.3,
  },

  // ── SEO & marketing ─────────────────────────────────────────────────
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    tagline: "Optimize content to rank with data-driven guidelines.",
    description:
      "Surfer analyzes top-ranking pages and scores your draft against 500+ signals in real time. Its AI writes optimized articles end-to-end, and Content Audit revives old posts.",
    category: "seo-marketing",
    pricing: "paid",
    url: "https://surferseo.com",
    features: ["Real-time content scoring", "AI article generation", "SERP analyzer", "Content audit for old posts"],
    featured: true,
    rating: 4.4,
  },
  {
    slug: "clearscope",
    name: "Clearscope",
    tagline: "The content optimization tool trusted by enterprise SEO teams.",
    description:
      "Clearscope grades content against what actually ranks, with clean reports writers love. Its focus on relevance over keyword stuffing keeps quality high at scale.",
    category: "seo-marketing",
    pricing: "paid",
    url: "https://www.clearscope.io",
    features: ["Relevance-based grading", "Writer-friendly reports", "Google Docs integration", "Content inventory monitoring"],
    rating: 4.5,
  },
  {
    slug: "semrush",
    name: "Semrush",
    tagline: "All-in-one SEO suite with AI-powered features.",
    description:
      "Semrush covers keyword research, backlinks, audits, and rank tracking, with AI features like ContentShake for article creation. It's the swiss-army knife of search marketing.",
    category: "seo-marketing",
    pricing: "free-trial",
    url: "https://www.semrush.com",
    features: ["Keyword and competitor research", "Site audit and backlinks", "ContentShake AI writing", "Rank tracking"],
    rating: 4.4,
  },
  {
    slug: "originality-ai",
    name: "Originality.ai",
    tagline: "Detect AI content and plagiarism with high accuracy.",
    description:
      "Originality.ai scans content for AI generation, plagiarism, and factual accuracy. Publishers and agencies use it to verify writer submissions and protect search rankings.",
    category: "seo-marketing",
    pricing: "paid",
    url: "https://originality.ai",
    features: ["AI content detection", "Plagiarism scanning", "Fact-checking aid", "Team management and API"],
    rating: 4.2,
  },
  {
    slug: "adcreative-ai",
    name: "AdCreative.ai",
    tagline: "Generate high-converting ad creatives in seconds.",
    description:
      "AdCreative.ai produces on-brand ad banners, texts, and product photoshoots scored by conversion prediction AI. Connect ad accounts to learn what performs and generate more of it.",
    category: "seo-marketing",
    pricing: "free-trial",
    url: "https://www.adcreative.ai",
    features: ["Conversion-scored creatives", "Brand kit generation", "Product photoshoots", "Ad account insights"],
    rating: 4.1,
  },

  // ── Design ──────────────────────────────────────────────────────────
  {
    slug: "canva-magic-studio",
    name: "Canva Magic Studio",
    tagline: "AI design superpowers inside the world's easiest design tool.",
    description:
      "Canva's Magic Studio bundles text-to-image, Magic Write, background removal, and one-click resizing into the design platform everyone already knows. The free tier is remarkably capable.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.canva.com/magic-home",
    features: ["Magic Design from prompts", "Background remover", "Magic Write copy", "Brand kit and resize"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "figma-ai",
    name: "Figma AI",
    tagline: "AI features woven into the standard tool for product design.",
    description:
      "Figma's AI generates first-draft designs, renames layers, and powers semantic asset search. Figma Make turns prompts and designs into working prototypes.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.figma.com/ai",
    features: ["First-draft generation", "Prompt-to-prototype (Make)", "Semantic asset search", "Auto layer naming"],
    rating: 4.4,
  },
  {
    slug: "photoroom",
    name: "Photoroom",
    tagline: "Instant product photos with AI backgrounds and editing.",
    description:
      "Photoroom removes backgrounds and generates studio-quality product scenes in seconds. E-commerce sellers use its batch mode and API to produce thousands of listing images.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.photoroom.com",
    features: ["One-tap background removal", "AI product backgrounds", "Batch editing", "API for scale"],
    rating: 4.5,
  },
  {
    slug: "remove-bg",
    name: "remove.bg",
    tagline: "Remove image backgrounds automatically in 5 seconds.",
    description:
      "remove.bg does one thing perfectly: fully automatic background removal for people, products, and cars. Free previews, API access, and Photoshop plugins cover every workflow.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.remove.bg",
    features: ["Fully automatic cutouts", "Free preview downloads", "Bulk processing", "API and plugins"],
    rating: 4.5,
  },
  {
    slug: "uizard",
    name: "Uizard",
    tagline: "Turn sketches and prompts into UI mockups instantly.",
    description:
      "Uizard converts hand-drawn wireframes, screenshots, and text prompts into editable UI designs. Product managers and founders use it to visualize ideas without waiting on design resources.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://uizard.io",
    features: ["Sketch-to-design scanning", "Screenshot to editable UI", "Text-to-mockup generation", "Drag-and-drop editor"],
    rating: 4.2,
  },

  // ── Research & search ───────────────────────────────────────────────
  {
    slug: "perplexity",
    name: "Perplexity",
    tagline: "The AI answer engine with real-time cited sources.",
    description:
      "Perplexity answers questions with up-to-date information and inline citations you can verify. Deep Research compiles expert-level reports, making it the researcher's default search replacement.",
    category: "research-search",
    pricing: "freemium",
    url: "https://www.perplexity.ai",
    features: ["Cited, current answers", "Deep Research reports", "Focus modes (academic, etc.)", "File upload analysis"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "notebooklm",
    name: "NotebookLM",
    tagline: "Google's free AI research assistant grounded in your sources.",
    description:
      "NotebookLM answers questions using only the documents you upload, with citations to exact passages. Its Audio Overview feature turns sources into a podcast-style discussion — free from Google.",
    category: "research-search",
    pricing: "free",
    url: "https://notebooklm.google.com",
    features: ["Source-grounded answers", "Audio Overview podcasts", "Automatic citations", "Completely free"],
    featured: true,
    rating: 4.6,
  },
  {
    slug: "consensus",
    name: "Consensus",
    tagline: "Search 200M+ scientific papers with AI-extracted findings.",
    description:
      "Consensus searches peer-reviewed research and summarizes what studies actually found. Its Consensus Meter shows scientific agreement at a glance — invaluable for evidence-based work.",
    category: "research-search",
    pricing: "freemium",
    url: "https://consensus.app",
    features: ["200M+ paper search", "Consensus Meter", "Study snapshot summaries", "Citation-ready quotes"],
    rating: 4.4,
  },
  {
    slug: "elicit",
    name: "Elicit",
    tagline: "Automate literature reviews with AI paper analysis.",
    description:
      "Elicit finds relevant papers, extracts key data into tables, and summarizes findings across studies. Researchers report saving hours per literature review.",
    category: "research-search",
    pricing: "freemium",
    url: "https://elicit.com",
    features: ["Semantic paper search", "Data extraction to tables", "Cross-study summaries", "Systematic review workflows"],
    rating: 4.3,
  },

  // ── Data & analytics ────────────────────────────────────────────────
  {
    slug: "julius-ai",
    name: "Julius AI",
    tagline: "Chat with your data — analysis and charts in plain English.",
    description:
      "Julius analyzes spreadsheets and datasets through conversation, producing charts, statistical tests, and forecasts. It writes and runs real Python, so results are reproducible.",
    category: "data-analytics",
    pricing: "freemium",
    url: "https://julius.ai",
    features: ["Conversational data analysis", "Real Python execution", "Chart generation", "Statistical modeling"],
    rating: 4.3,
  },
  {
    slug: "rows",
    name: "Rows AI",
    tagline: "The spreadsheet with AI analysis built into every cell.",
    description:
      "Rows combines a modern spreadsheet with AI functions that classify, extract, and summarize data. Its AI Analyst explains trends in your tables with one click.",
    category: "data-analytics",
    pricing: "freemium",
    url: "https://rows.com",
    features: ["AI functions in cells", "One-click AI Analyst", "Live data integrations", "Beautiful shareable tables"],
    rating: 4.2,
  },
  {
    slug: "paradigm",
    name: "Paradigm",
    tagline: "AI-powered spreadsheet that researches and enriches data.",
    description:
      "Paradigm fills spreadsheets with AI agents that research companies, find contacts, and enrich rows automatically. Think of it as a thousand research assistants working in your sheet.",
    category: "data-analytics",
    pricing: "freemium",
    url: "https://www.paradigmai.com",
    features: ["Agentic data enrichment", "Company and contact research", "Auto-updating cells", "CRM-ready exports"],
    rating: 4.1,
  },

  // ── Education ───────────────────────────────────────────────────────
  {
    slug: "khanmigo",
    name: "Khanmigo",
    tagline: "Khan Academy's AI tutor that guides instead of answering.",
    description:
      "Khanmigo tutors students Socratically — asking guiding questions rather than giving answers. Teachers get free lesson planning and grading assistance across Khan Academy's curriculum.",
    category: "education",
    pricing: "freemium",
    url: "https://www.khanmigo.ai",
    features: ["Socratic tutoring method", "Free for teachers", "Khan Academy integration", "Safe, education-first design"],
    rating: 4.4,
  },
  {
    slug: "duolingo-max",
    name: "Duolingo Max",
    tagline: "AI conversation practice and explanations for language learning.",
    description:
      "Duolingo Max adds AI-powered roleplay conversations and 'Explain My Answer' to the world's most popular language app. Practice real dialogue with instant, patient feedback.",
    category: "education",
    pricing: "paid",
    url: "https://www.duolingo.com",
    features: ["AI roleplay conversations", "Answer explanations", "Video call practice", "Gamified learning"],
    rating: 4.3,
  },
  {
    slug: "socratic",
    name: "Socratic by Google",
    tagline: "Free homework help — snap a photo, get explanations.",
    description:
      "Socratic uses Google AI to explain homework problems from a photo. Step-by-step breakdowns, videos, and study guides cover math, science, history, and more — completely free.",
    category: "education",
    pricing: "free",
    url: "https://socratic.org",
    features: ["Photo-based problem help", "Step-by-step explanations", "Curated study resources", "100% free"],
    rating: 4.2,
  },

  // ── Business & sales ────────────────────────────────────────────────
  {
    slug: "apollo-io",
    name: "Apollo.io",
    tagline: "AI sales platform with 275M+ contacts and smart outreach.",
    description:
      "Apollo combines a massive B2B database with AI that writes personalized emails, scores leads, and books meetings. Its free tier gives real prospecting power to small teams.",
    category: "business-sales",
    pricing: "freemium",
    url: "https://www.apollo.io",
    features: ["275M+ contact database", "AI email personalization", "Lead scoring", "Meeting scheduler"],
    rating: 4.4,
  },
  {
    slug: "gong",
    name: "Gong",
    tagline: "Revenue intelligence that learns from every customer call.",
    description:
      "Gong records and analyzes sales conversations to reveal what winning reps do differently. AI forecasts, deal warnings, and coaching insights drive measurable revenue lift.",
    category: "business-sales",
    pricing: "paid",
    url: "https://www.gong.io",
    features: ["Call recording and analysis", "Deal risk warnings", "AI forecasting", "Rep coaching insights"],
    rating: 4.5,
  },
  {
    slug: "lavender",
    name: "Lavender",
    tagline: "AI email coach that helps sellers write replies that convert.",
    description:
      "Lavender grades your sales emails in real time and suggests improvements proven to boost reply rates. Personalization data on every prospect appears right in your inbox.",
    category: "business-sales",
    pricing: "freemium",
    url: "https://www.lavender.ai",
    features: ["Real-time email scoring", "Personalization assistant", "Reply-rate analytics", "Works in Gmail and Outlook"],
    rating: 4.3,
  },

  // ── Product Hunt favorites ──────────────────────────────────────────
  {
    slug: "deepseek",
    name: "DeepSeek",
    tagline: "Free, open frontier-class AI chat that shook the industry.",
    description:
      "DeepSeek offers frontier-level chat and reasoning models completely free, with open weights developers can run themselves. Its R1 reasoning model became a global sensation for matching premium assistants at a fraction of the cost.",
    category: "chat-assistants",
    pricing: "free",
    url: "https://chat.deepseek.com",
    features: ["Free frontier-class chat", "R1 step-by-step reasoning", "Open-weight models", "Very low-cost API"],
    rating: 4.4,
  },
  {
    slug: "bolt-new",
    name: "Bolt.new",
    tagline: "Prompt, run, edit, and deploy full-stack apps in the browser.",
    description:
      "Bolt.new by StackBlitz builds and runs full-stack web apps from a prompt, entirely in your browser. One of Product Hunt's biggest AI launches, it pairs code generation with a live dev environment so you can edit and deploy without any local setup.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://bolt.new",
    features: ["Full-stack apps from prompts", "In-browser dev environment", "One-click deploys", "Framework support (React, Next, more)"],
    rating: 4.4,
  },
  {
    slug: "coderabbit",
    name: "CodeRabbit",
    tagline: "AI code reviews on every pull request.",
    description:
      "CodeRabbit reviews pull requests with line-by-line comments, summaries, and suggested fixes before a human ever looks. Teams use it to catch issues earlier and cut review turnaround dramatically — free for open-source projects.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://coderabbit.ai",
    features: ["Line-by-line PR reviews", "Auto-generated summaries", "One-click fix suggestions", "Free for open source"],
    rating: 4.4,
  },
  {
    slug: "glide",
    name: "Glide",
    tagline: "Turn spreadsheets into polished apps without code.",
    description:
      "Glide builds custom business apps from your spreadsheets and data, with AI features for generation and automation. A long-time Product Hunt favorite for shipping internal tools in minutes instead of months.",
    category: "coding-development",
    pricing: "freemium",
    url: "https://www.glideapps.com",
    features: ["Apps from spreadsheets", "AI-assisted app generation", "No-code editor", "Publish to web and mobile"],
    rating: 4.3,
  },
  {
    slug: "superhuman",
    name: "Superhuman",
    tagline: "The fastest email experience, now with an AI copilot.",
    description:
      "Superhuman speeds through email with instant triage, AI-written drafts in your voice, thread summaries, and follow-up reminders. Consistently rated among Product Hunt's top productivity tools for saving hours every week.",
    category: "productivity",
    pricing: "paid",
    url: "https://superhuman.com",
    features: ["AI drafts in your voice", "Instant thread summaries", "Split inbox triage", "Follow-up reminders"],
    rating: 4.6,
  },
  {
    slug: "granola",
    name: "Granola",
    tagline: "The AI notepad that perfects your meeting notes.",
    description:
      "Granola listens to your meetings and blends its transcription with the rough notes you type, producing polished summaries without a bot joining the call. A breakout Product Hunt launch loved for staying invisible during meetings.",
    category: "productivity",
    pricing: "freemium",
    url: "https://www.granola.ai",
    features: ["No meeting bot required", "Blends your notes with AI", "Template-based summaries", "Works across meeting apps"],
    rating: 4.6,
  },
  {
    slug: "wispr-flow",
    name: "Wispr Flow",
    tagline: "Dictation that works everywhere — speak 4x faster than typing.",
    description:
      "Wispr Flow turns natural speech into clean, formatted text in any app, auto-editing filler words and matching your tone. Product Hunt users made it one of the highest-rated voice tools for hands-free writing.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://wisprflow.ai",
    features: ["Works in every app", "Auto-edits filler words", "Tone-matched formatting", "100+ languages"],
    rating: 4.5,
  },
  {
    slug: "voicenotes",
    name: "Voicenotes",
    tagline: "Ramble your thoughts; get organized, searchable notes.",
    description:
      "Voicenotes captures spoken thoughts and turns them into summaries, to-do lists, blog drafts, and more. Ask its AI about anything you've ever recorded — a Product Hunt top pick for thinkers on the move.",
    category: "voice-speech",
    pricing: "freemium",
    url: "https://voicenotes.com",
    features: ["Instant voice capture", "AI summaries and action items", "Ask-your-notes chat", "Lifetime access option"],
    rating: 4.4,
  },
  {
    slug: "manus",
    name: "Manus",
    tagline: "The autonomous agent that completes entire tasks for you.",
    description:
      "Manus takes a goal — research a market, build a report, plan a trip — and works autonomously across the web until it's done. Its 2025 debut sparked one of the biggest AI agent waves since ChatGPT.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://manus.im",
    features: ["End-to-end task completion", "Autonomous web browsing", "Report and slide generation", "Scheduled recurring tasks"],
    rating: 4.2,
  },
  {
    slug: "genspark",
    name: "Genspark",
    tagline: "An all-in-one AI workspace with a super agent inside.",
    description:
      "Genspark combines search, slides, docs, and phone-calling AI agents in one workspace. Its Super Agent plans multi-step tasks and executes them with real tools, making it a Product Hunt standout in the agent era.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://www.genspark.ai",
    features: ["Super Agent task execution", "AI slides and docs", "Agentic search", "Real phone-call agents"],
    rating: 4.3,
  },
  {
    slug: "lindy",
    name: "Lindy",
    tagline: "Build AI employees for email, meetings, and outreach.",
    description:
      "Lindy lets you assemble AI agents — 'Lindies' — that triage email, book meetings, qualify leads, and chain together into workflows. No code required, with hundreds of ready-made agent templates.",
    category: "automation-agents",
    pricing: "freemium",
    url: "https://www.lindy.ai",
    features: ["No-code agent builder", "Email and calendar agents", "Agent-to-agent workflows", "Hundreds of templates"],
    rating: 4.3,
  },
  {
    slug: "chatbase",
    name: "Chatbase",
    tagline: "Train a custom AI support agent on your own data.",
    description:
      "Chatbase builds AI customer-support agents trained on your website, docs, and files, then embeds them anywhere. A Product Hunt favorite that grew into a full agent platform with actions and integrations.",
    category: "business-sales",
    pricing: "freemium",
    url: "https://www.chatbase.co",
    features: ["Train on your own content", "Embeddable chat widget", "Actions and integrations", "Multi-model support"],
    rating: 4.3,
  },
  {
    slug: "krea-ai",
    name: "Krea AI",
    tagline: "Real-time AI image generation and enhancement canvas.",
    description:
      "Krea renders images in real time as you draw, type, or move shapes — a genuinely new way to create with AI. Its enhancer and video tools round out one of the most-loved creative suites on Product Hunt.",
    category: "image-generation",
    pricing: "freemium",
    url: "https://www.krea.ai",
    features: ["Real-time generation canvas", "Image enhancement and upscale", "Video generation", "Style references"],
    rating: 4.5,
  },
  {
    slug: "magnific-ai",
    name: "Magnific AI",
    tagline: "The image upscaler that adds jaw-dropping detail.",
    description:
      "Magnific upscales and 'reimagines' images, hallucinating realistic detail guided by your prompt and creativity sliders. Its viral before/after results made it one of Product Hunt's most talked-about creative launches.",
    category: "image-generation",
    pricing: "paid",
    url: "https://magnific.ai",
    features: ["Detail-adding upscaler", "Creativity and resemblance sliders", "Style transfer relight", "Up to 10K resolution"],
    rating: 4.4,
  },
  {
    slug: "napkin-ai",
    name: "Napkin AI",
    tagline: "Turn plain text into shareable visuals and diagrams.",
    description:
      "Napkin transforms your text into editable diagrams, flowcharts, and infographics with one click — no design skills needed. A Product Hunt favorite for making docs, decks, and posts instantly more visual.",
    category: "presentations",
    pricing: "freemium",
    url: "https://www.napkin.ai",
    features: ["Text-to-diagram generation", "Editable visual styles", "Export to PNG, SVG, PDF", "Free while in beta"],
    rating: 4.5,
  },
  {
    slug: "decktopus",
    name: "Decktopus AI",
    tagline: "One-prompt presentations with built-in forms and voiceovers.",
    description:
      "Decktopus generates complete slide decks from a topic, then layers in forms, voiceovers, and follow-up tools. A Product Hunt top pick for sales teams who need polished decks fast.",
    category: "presentations",
    pricing: "freemium",
    url: "https://www.decktopus.com",
    features: ["One-prompt deck creation", "Embedded forms and voiceovers", "Smart layout fixes", "Custom domain sharing"],
    rating: 4.1,
  },
  {
    slug: "framer",
    name: "Framer",
    tagline: "Design and publish stunning websites with AI assistance.",
    description:
      "Framer turns designs and prompts into production websites with AI page generation, localization, and effects — no code needed. Its AI-era relaunches repeatedly topped Product Hunt's charts.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.framer.com",
    features: ["AI page generation", "Visual canvas to live site", "Built-in CMS and SEO", "AI localization"],
    rating: 4.5,
  },
  {
    slug: "visily",
    name: "Visily",
    tagline: "AI wireframing anyone on the team can use.",
    description:
      "Visily converts screenshots, sketches, and text prompts into editable wireframes and hi-fi mockups. Product managers love that it feels like a design tool built for non-designers — with a generous free tier.",
    category: "design-tools",
    pricing: "freemium",
    url: "https://www.visily.ai",
    features: ["Screenshot to editable design", "Text-to-wireframe", "Hi-fi and lo-fi modes", "Team collaboration"],
    rating: 4.3,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────
export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(slug: string): Tool[] {
  return TOOLS.filter((t) => t.category === slug);
}

export function getToolsByPricing(...pricing: Pricing[]): Tool[] {
  return TOOLS.filter((t) => pricing.includes(t.pricing));
}

export function getFeaturedTools(): Tool[] {
  return TOOLS.filter((t) => t.featured);
}

export function getRelatedTools(tool: Tool, limit = 4): Tool[] {
  return TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, limit);
}

export function categoryCount(slug: string): number {
  return TOOLS.filter((t) => t.category === slug).length;
}
