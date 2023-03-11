import ReactMarkdown from "react-markdown";

export default function FormattedDocumentation(props) {
  let docs_array = props.docs.toHuman()
  let documentation = ""

  for (const key in docs_array) {
    if (docs_array[key].includes("# <weight>") ||
      docs_array[key].includes("# </weight>")) {
      docs_array[key] = ""
    }
    docs_array[key] = docs_array[key] + "\n"
    documentation = documentation + docs_array[key]
  }

  return (
    <ReactMarkdown>{documentation}</ReactMarkdown>
  )
}