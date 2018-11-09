const mapWindowToProps = ({ id = null, name = null }) => {
  const MGMRI = window && window.MGMRI;
  if (!MGMRI) return null;
  const components = MGMRI.data.components || [];
  const data = components.filter(component => {
    if (id) {
      return component.componentId === id;
    }
    return component.componentName === name;
  });
  return data[0] ? data[0].componentData : null;
};

export default mapWindowToProps;
