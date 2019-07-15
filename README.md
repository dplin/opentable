This is a an App that allows user to retrieve a list of restaurants from Opentable's public API.

## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I've spent around 2hours of time on this coding test. I would like to add pagination and also a more efficent refine/filter logic (lazy load perhaps). Manipulating Javascript object is very quick but DOM is super slow in comparison.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Async and Await

```
async function asyncFunction() {
  // fetch data from a url endpoint
  let data = await fetch("/api_endpoint");
  let text = await data.text();
  return text;
}

asyncFunction().then((text) => {
  console.log(text);
});
```

## How would you track down a performance issue in production? Have you ever had to do this?

Tracked API performance issue using Postman Monitoring. Also tracked memory leakage using Chrome Dev Tools by taking a snapshot and compare the result.

## How would you improve the API that you just used?

*Use elastic engine
*Compress the response in gzip

## Please describe yourself using JSON.
```
{
  'name': 'Derek Lin'
  'desc': 'I may not be the smartest person in the room but I always work hard. And it seems the harder I work, the more luck I have.'
}
```
