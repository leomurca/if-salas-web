function PeopleTab({ layoutType, peopleTabData }) {
  const layoutResolver = (state, people, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;
        case 'idle':
          return <h1>People Tab</h1>;
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
          return <h1>People Tab</h1>;
        case 'gone':
          return null;
        default:
          return null;
      }
    }
  };

  return layoutResolver(
    peopleTabData && peopleTabData.state,
    peopleTabData && peopleTabData.people,
    layoutType
  );
}

export default PeopleTab;
