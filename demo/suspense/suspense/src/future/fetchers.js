import { unstable_createResource as createResource } from 'react-cache';

import { getCourses, getGroups, getImage, getStudents, getStudent } from 'data';

function createFetcher(thunk) {
  const res = createResource(thunk);

  return {
    preload: (key) => res.preload(key),
    read: (key) => res.read(key)
  };
}

export const groupsFetcher = createFetcher(
  () => getGroups()
);

export const studentsFetcher = createFetcher(
  (group) => getStudents(group)
);

export const studentFetcher = createFetcher(
  (name) => getStudent(name)
);

export const coursesFetcher = createFetcher(
  () => getCourses()
);

export const imageFetcher = createFetcher(
  (src) => getImage(src)
);

export const coursePageFetcher = createFetcher(
  () =>  import('../Course.js')
);
