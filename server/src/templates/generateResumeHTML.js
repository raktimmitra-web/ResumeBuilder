import { generateTemplate1HTML } from "./Template1.js";
import { generateTemplate2HTML } from "./Template2.js";

export function generateResumeHTML(data, template) {
  const templateHTML =
    template === "template_1"
      ? generateTemplate1HTML(data)
      : generateTemplate2HTML(data);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
          @page { margin: 25px; }
          body { background: white; font-family: 'Inter', sans-serif; color: #111827; }
        </style>
      </head>
      <body>
        ${templateHTML}
      </body>
    </html>
  `;
}