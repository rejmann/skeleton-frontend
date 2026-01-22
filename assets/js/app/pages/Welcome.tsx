import IconCube from '@app/components/IconCube'

interface Props {
  message: string
}

export function WelcomePage({ message }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 overflow-hidden">
      <div className="max-w-3xl mx-4 p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 shadow-xl">
        <header className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center bg-amber-400 rounded-lg shadow-md">
            <IconCube className="text-slate-900" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{message}</h1>
            <p className="text-sm text-slate-300 mt-1">
              React + Vite + Tailwind — pronto para desenvolver.
            </p>
          </div>
        </header>

        <main className="w-full mt-6 space-y-4">
          <div className="p-4 bg-white/3 rounded-lg border border-white/5">
            <h2 className="text-lg font-medium">Dicas</h2>
            <ul className="text-sm text-slate-300 mt-2 list-disc list-inside space-y-1">
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
