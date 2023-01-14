import React from 'react'
import { ArticleContainer } from './styles'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface IArticle {
  article: string
}
const Article: React.FC<IArticle> = ({ article }) => {
  const CodeBlock = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }
  return (
    <ArticleContainer>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>
        {article}
      </ReactMarkdown>
    </ArticleContainer>
  )
}

export default Article
