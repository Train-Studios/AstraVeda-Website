import fs from 'node:fs/promises';
import path from 'node:path';

type MarkdownBlock =
  | {type: 'heading'; level: 1 | 2 | 3; text: string}
  | {type: 'paragraph'; text: string}
  | {type: 'list'; items: string[]}
  | {type: 'divider'};

const legalDir = path.join(process.cwd(), 'content', 'legal');

function cleanInline(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
}

export async function getLegalMarkdown(slug: 'privacy_policy' | 'terms') {
  const filePath = path.join(legalDir, `${slug}.md`);
  return fs.readFile(filePath, 'utf8');
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({type: 'paragraph', text: cleanInline(paragraph.join(' '))});
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({type: 'list', items: listItems.map(cleanInline)});
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed === '---') {
      flushParagraph();
      flushList();
      blocks.push({type: 'divider'});
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({
        type: 'heading',
        level: heading[1].length as 1 | 2 | 3,
        text: cleanInline(heading[2]),
      });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      listItems.push(trimmed.replace(/^[-*]\s+/, ''));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}
