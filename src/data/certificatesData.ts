export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  pdfFile: string;
  externalLink?: string;
}

export const certificates: Certificate[] = [
  {
    id: "mcp",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic / Skilljar",
    pdfFile: "/certificates/mcp.pdf",
    externalLink: "https://verify.skilljar.com/c/kuiiio8s6ttk"
  },
  {
    id: "claude-code",
    title: "Claude Code in Action",
    issuer: "Anthropic / Skilljar",
    pdfFile: "/certificates/claude-code.pdf",
    externalLink: "https://verify.skilljar.com/c/4b5b7iv92tqm"
  },
  {
    id: "data-eng-aws",
    title: "Data Engineering on AWS",
    issuer: "AWS",
    pdfFile: "/certificates/data-eng-aws.pdf",
    externalLink: "https://drive.google.com/file/d/1aT77NNdNdBo1yP_RWy83ymIG2OP2mt87/view?usp=drive_link"
  },
  {
    id: "prompt-eng",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    pdfFile: "/certificates/prompt-eng.pdf",
    externalLink: "https://drive.google.com/file/d/18zAPxsR5Oi2Rp4_1CfeOhe1qEM2l2iUa/view?usp=drive_link"
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    issuer: "AWS",
    pdfFile: "/certificates/gen-ai.pdf",
    externalLink: "https://drive.google.com/file/d/1vYRuSayDEQIbvYGNmmDkTMOX7Yx3jkbC/view?usp=drive_link"
  },
  {
    id: "system-design",
    title: "Software Architecture & System Design Foundations",
    issuer: "System Design",
    pdfFile: "/certificates/system-design.pdf",
    externalLink: "https://drive.google.com/file/d/19E8O3lIg3aHBVfSoM7C_qm4LrlY2f8x2/view?usp=drive_link"
  }
];
