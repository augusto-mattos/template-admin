import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo='Notificacoes' subtitulo='Aqui serão gerenciadas as notificações'>
        <button onClick={alternarTema}>Alternar tema</button>
    </Layout>
  )
}
