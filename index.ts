import axios from 'axios';

// Interface in TS is used to define the structure of an object.

const url = "http://jsonplaceholder.typicode.com/posts/1";

interface Post {
  id: number;
  title: string
}

axios.get(url)
  .then((response) => {
    const post = response.data as Post;
    const id = post.id;
    const title = post.title;
    logPost(id, title);
  });

// type annotation
const logPost = (id: number, title: string) => {
  console.log(`
        Post id is: ${id}
        Post title is: ${title}
  `);
}

//Destructuring with Annotations

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);







