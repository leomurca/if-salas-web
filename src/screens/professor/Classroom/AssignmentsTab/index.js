function AssignmentsTab({ assignmentsTabData, layoutType }) {
  const layoutResolver = (state, assignments, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;
        case 'idle':
          return <h1>Assignments Tab</h1>;
        case 'gone':
          return null;
        default:
          return null;
      }
    } else if (layoutType === 'mobile') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;
        case 'idle':
          return <h1>Assignments Tab</h1>;
        case 'gone':
          return null;
        default:
          return null;
      }
    }
  };
  return layoutResolver(
    assignmentsTabData && assignmentsTabData.state,
    assignmentsTabData && assignmentsTabData.assignments,
    layoutType
  );
}

export default AssignmentsTab;
