module.exports = {

"[project]/.next-internal/server/app/experience/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/data/experiences.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/data/experiences.ts
__turbopack_context__.s({
    "experiences": (()=>experiences)
});
const experiences = [
    {
        id: "libertify_ai_engineer",
        slug: "libertify-ai-engineer",
        title: "AI Engineer",
        company: "Libertify",
        period: "Dec 2024 – Present",
        location: "Paris, France",
        description: "Architected advanced AI pipelines for video generation from documents.",
        details: [
            "Enhanced the RAG system with multimodal pipelines combining text and visual embeddings to improve retrieval and contextual video generation.",
            "Built AI agents that classify newsletter content by topic, generate structured video scripts, and ensure prompt consistency for downstream tasks.",
            "Engineered a dedicated image generation pipeline that uses LLMs to automatically produce tailored prompts from video scripts, generating high-quality images for use as dynamic video backgrounds.",
            "Developed separate modules for extracting images from PDFs and performing background removal to enrich content assets.",
            "Established rigorous unit testing, debugging, and validation frameworks to ensure platform robustness and accuracy across all AI pipelines."
        ],
        more: {
            companyIntro: "Libertify is a Paris‑based AI/Fintech startup transforming complex financial & ESG documents into engaging, video‑based narratives...",
            website: "https://www.linkedin.com/company/libertyfi/posts/?feedView=all"
        },
        tags: [
            "Python",
            "GCP",
            "Pydantic",
            "LLMs",
            "AI Agents",
            "RAG",
            "Image Processing",
            "Prompt Engineering",
            "Unit Testing"
        ],
        gradient: "from-[hsl(var(--brand-yellow-pastel))] to-transparent",
        icon: "Video"
    },
    {
        id: "renault_internship",
        slug: "renault-internship",
        title: "AI & Data Mining Intern",
        company: "Renault",
        period: "Apr 2024 – Oct 2024",
        location: "Guyancourt, France",
        description: "Optimized automotive manufacturing through predictive quality and document analysis.",
        details: [
            "Developed predictive models using AI and data mining to identify vehicle defects from diagnostic trouble codes (DTCs), strengthening quality control in manufacturing.",
            "Automated tender document analysis with a combined NLP and computer vision pipeline, improving procurement efficiency and compliance checking.",
            "Supported predictive maintenance initiatives by analyzing sensor data and fault histories to forecast potential failures.",
            "Contributed to data annotation and validation efforts, ensuring robust training datasets for defect prediction and document parsing tasks.",
            "Collaborated closely with engineers and procurement specialists to integrate AI solutions into existing Renault workflows, enhancing overall operational efficiency."
        ],
        more: {
            companyIntro: "Renault is a global automotive leader headquartered in France...",
            challenges: [
                "Handling highly imbalanced data for predictive defect detection in vehicle quality pipelines.",
                "Automating extraction of compliance and technical requirements from complex tender documents.",
                "Ensuring solutions were scalable and aligned with Renault’s rigorous production and quality standards."
            ],
            website: "https://www.renaultgroup.com/en/"
        },
        tags: [
            "Python",
            "Machine Learning",
            "NLP",
            "Computer Vision",
            "Predictive Maintenance",
            "Quality Control",
            "LLM",
            "RAG",
            "Data annotation"
        ],
        gradient: "from-[hsl(var(--brand-coral-pastel))] to-transparent",
        icon: "Car"
    }
];
}}),
"[project]/src/components/ExperienceDetail.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ExperienceDetail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ExperienceDetail.tsx <module evaluation>", "default");
}}),
"[project]/src/components/ExperienceDetail.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ExperienceDetail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ExperienceDetail.tsx", "default");
}}),
"[project]/src/components/ExperienceDetail.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceDetail$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ExperienceDetail.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceDetail$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ExperienceDetail.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceDetail$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/experience/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExperienceDetailPage),
    "dynamicParams": (()=>dynamicParams),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/experiences.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExperienceDetail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
const dynamicParams = false; // Optional but recommended for export mode
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["experiences"].map((exp)=>({
            slug: exp.slug
        }));
}
function ExperienceDetailPage({ params }) {
    const experience = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["experiences"].find((exp)=>exp.slug === params.slug);
    if (!experience) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-[hsl(var(--sidebar-primary-foreground))] flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            experience: experience,
            onBack: ()=>history.back()
        }, void 0, false, {
            fileName: "[project]/src/app/experience/[slug]/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/experience/[slug]/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/experience/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/experience/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_d0820b11._.js.map