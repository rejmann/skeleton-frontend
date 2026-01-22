import { createRoot } from 'react-dom/client'

const render = (
  rootElement: HTMLElement,
  Component: React.FunctionComponent<any>,
) => {
  const props = rootElement.dataset.props
    ? JSON.parse(rootElement.dataset.props)
    : {}

  return <Component {...props} />
}

export const renderComponent = (
  page: React.FunctionComponent<any>,
  rootElementId = 'react',
) => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById(rootElementId)
    if (!container) {
      console.error(`Container #${rootElementId} não encontrado`)
      return
    }

    const root = createRoot(container)
    root.render(render(container, page))
  })
}
