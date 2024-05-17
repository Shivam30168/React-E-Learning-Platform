import React from 'react'

const SubjectCard = () => {
    const param=useParams();
    return (
      <div>
            <h1>Inside {param.subject} {param.name}Details</h1>
      </div>
    )
}

export default SubjectCard
