function AssignmentsTab({ assignmentsTabData }) {
  return assignmentsTabData && assignmentsTabData.state === 'loading' ? (
    <h1>Loading..</h1>
  ) : assignmentsTabData.state === 'gone' ? null : (
    <h1>Assignments Tab</h1>
  );
}

export default AssignmentsTab;
