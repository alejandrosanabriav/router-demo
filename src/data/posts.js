import faker from 'faker';

let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

posts = posts.map(post => {
  return {
    id: post,
    title: faker.lorem.sentence(),
    excerpt: faker.lorem.sentences(10),
    content: faker.lorem.sentences(100),
    author: faker.name.findName()
  }
});

export default posts;