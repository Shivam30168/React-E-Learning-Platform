
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BackButton = () => {
    const nav=useNavigate();
    const design={
      position:"absolute",
      right:"50px"
    }
  return (
    <div>
      <Button variant="dark" onClick={()=>nav(-1)} style={design}>Back</Button>
    </div>
  )
}

export default BackButton
