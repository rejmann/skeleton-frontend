import IconCube from '@app/components/IconCube'

interface Props {
  message: string
}

export function WelcomePage({ message }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100">
      <div className="mx-4 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
        <header className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-amber-400 shadow-md">
            <IconCube className="text-slate-900" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{message}</h1>
            <p className="mt-1 text-sm text-slate-300">
              React + Vite + Tailwind — pronto para desenvolver.
            </p>
          </div>
        </header>

        <main className="mt-6 w-full space-y-4">
          <div className="rounded-lg border border-white/5 bg-white/3 p-4">
            <h2 className="text-lg font-medium">Dicas</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
              <li>Use `make vite-dev-server` para desenvolvimento com HMR.</li>
              <li>Construir para produção: `make npm-build`.</li>
              <li>
                As páginas React são montadas via `renderComponent` nos
                controllers.
              </li>
            </ul>
          </div>
        </main>

        <footer className="mt-6 text-xs text-slate-400">
          Versão de desenvolvimento — personalize à vontade.
        </footer>
      </div>
    </div>
  )
}
