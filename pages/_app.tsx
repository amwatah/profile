import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../components/layouts/AppLayout'
import { useAtom } from 'jotai'
import { activeThemeAtom } from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme] = useAtom( activeThemeAtom)
  return(
       <div  data-theme={activeTheme} className="overflow-x-hidden w-screen min-h-screen ">
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
        </div>
       
  )
}

export default MyApp
