import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" width="200px" src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
            <Card.Title>J Yang</Card.Title>
            <Card.Text>
            I enjoy basketball and working out
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard