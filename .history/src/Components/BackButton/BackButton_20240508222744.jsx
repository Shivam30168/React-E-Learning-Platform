
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BackButton = () => {
    const nav=useNavigate();
  return (
    <div>
      <Button variant="secondary" onClick={()=>nav(-1)}>Back</Button>
    </div>
  )
}

export default BackButton
