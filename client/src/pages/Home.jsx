import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientsModal from '../components/AddClientsModal';
import AddProjectsModal from '../components/AddProjectsModal';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientsModal />
        <AddProjectsModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}
