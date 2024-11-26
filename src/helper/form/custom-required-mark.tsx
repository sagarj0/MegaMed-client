export const customRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {<span style={required ? { marginLeft: 2 } : {}}>{label}</span>}
    {required && <span style={{ marginRight: 2 }}>*</span>}
  </>
);

// ✻
