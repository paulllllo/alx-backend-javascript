export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (e) {
    const errorMessage = `Error: ${e.message}`;
    queue.push(errorMessage);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
