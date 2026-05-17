import {parseMarkdown} from '@/lib/legal';

type LegalDocumentProps = {
  markdown: string;
};

export function LegalDocument({markdown}: LegalDocumentProps) {
  const blocks = parseMarkdown(markdown);

  return (
    <article className="legal-content mx-auto max-w-4xl rounded-[2rem] border border-gold/15 bg-ink/62 px-5 py-8 shadow-glass backdrop-blur-xl sm:px-8 md:px-12 md:py-12">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const HeadingTag = `h${block.level}` as 'h1' | 'h2' | 'h3';
          return <HeadingTag key={`${block.text}-${index}`}>{block.text}</HeadingTag>;
        }
        if (block.type === 'list') {
          return (
            <ul key={index}>
              {block.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === 'divider') {
          return <hr key={index} className="my-8 border-gold/12" />;
        }
        return <p key={index}>{block.text}</p>;
      })}
    </article>
  );
}
