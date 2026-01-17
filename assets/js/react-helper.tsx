import { createRoot } from 'react-dom/client'

function renderComponent(
  rootElement: HTMLElement,
  Component: React.FunctionComponent<any>,
): React.ReactElement {
  const props = rootElement.dataset.props
    ? JSON.parse(rootElement.dataset.props)
    : {}

  return <Component {...props} />
}

export default function renderPage(
  rootElementId: string,
  page: React.FunctionComponent<any>,
) {
  const container = document.getElementById(rootElementId)

  if (container) {
    const root = createRoot(container)
    root.render(renderComponent(container, page))
  }
}
