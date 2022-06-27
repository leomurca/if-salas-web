import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Information() {
  useDocumentTitle('Informações');
  return <h1>Informações</h1>;
}

export default Information;
