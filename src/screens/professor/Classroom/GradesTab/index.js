function GradesTab({ gradesTabData, layoutType }) {
  const layoutResolver = (state, grades, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;
        case 'idle':
          return <h1>Grades Tab</h1>;
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
          return <h1>Grades Tab</h1>;
        case 'gone':
          return null;
        default:
          return null;
      }
    }
  };

  console.log(gradesTabData);
  return layoutResolver(
    gradesTabData && gradesTabData.state,
    gradesTabData && gradesTabData.grades,
    layoutType
  );
}

export default GradesTab;
