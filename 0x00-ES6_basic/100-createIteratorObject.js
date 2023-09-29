export default function createIteratorObject(report) {
  const staff = [];

  for (const key of Object.keys(report.allEmployees)) {
    const oneDept = report.allEmployees[key];
    oneDept.forEach((name) => staff.push(name));
  }

  const iterable = {
    i: 0,
    [Symbol.iterator]() {
      const that = this;
      return {
        next() {
          if (that.i < staff.length) {
            const temp = that.i;
            that.i = temp + 1;
            return { value: staff[temp], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };

  return iterable;
}
