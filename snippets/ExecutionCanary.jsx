export const ExecutionCanary = () => {
  const windowType = typeof window;
  const processType = typeof process;

  return (
    <div>
      MINTLIFY_JSX_WINDOW_{windowType}
      MINTLIFY_JSX_PROCESS_{processType}
    </div>
  );
};
