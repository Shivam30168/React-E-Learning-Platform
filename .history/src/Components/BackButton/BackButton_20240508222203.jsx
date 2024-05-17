
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BackButton = () => {
    const nav=useNavigate();
  return (
    <div>
      <Button variant="primary" onClick={()=>nav(-1)}></Button>
    </div>
  )
}

export default BackButton
