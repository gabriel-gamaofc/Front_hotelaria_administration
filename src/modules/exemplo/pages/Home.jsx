import Layout from '../components/Layout';
import useHealth from '../hooks/useHealth';

export default function Home() {
  const data = useHealth();

  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="card">
        <h3>Status da API</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className="card">
        <h3>Resumo</h3>
        <p>Sistema rodando normalmente 🚀</p>
      </div>
    </Layout>
  );
}