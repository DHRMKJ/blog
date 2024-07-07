---
title: 'Node.js Architecture'
description: 'JavaScript on the machine and the machine that runs JavaScript'
pubDate: 'May 02 2023'
categories: ['Programming', "JavaScript"]
---

**How JavaScript's the most popular runtime works?**

You must have heard that Node.js is non-blocking and event driven but what do those things mean?
if you dont know let's dive into node.

## The Inception

You can skip this part if you'd like it's just history.

Node.js was initially written by [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) in 2009, fueled by frustration with traditional server-side setups like Apache which limited concurrency. He didn't just want to shake things up—he wanted to rock the boat! Armed with JavaScript's power and Google's lightning-fast V8 engine, Node.js ditched the old sequential programming style for an event-driven, non-blocking approach.

At its core, Node.js was like a party for devs tired of slow, clunky servers. It kicked off with a bang at the first European JSConf in 2009, showing off its prowess in handling thousands of connections without breaking a sweat. Initially it was only made for unix systems though.
## What's it made of?
Node.js is combination of the google's [V8 engine](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine), a clang library [Libuv](https://github.com/libuv/libuv) and the [Event Loop](#the-event-loop).

### The Event Loop
***Below is the representation of how I think of it, events come and events go.***

<div style="display: flex; justify-content: space-around;">
    <img src="/post/arrow-right.png" alt="arrow right" style="width: 30%;">
    <img src="/post/event-loop.jpg" alt="loop" style="width: 30%;">
    <img src="/post/arrow.png" alt="arrow" style="width: 30%;">
</div>

**The Computations**

event loop is the loop that handles the computation, node.js also has an event queue.

All of the computation is handled by the event loop,operations like file reading I/O, encryption/decryption are handled by libuv and event queue which handles timers and async requests so if you think about it node.js as a whole is not actually single threaded because libuv is asynchronous.

[So what happens when an http request is handled by our node.js server?](#the-tale-of-a-request)

## **The Tale of a Request**

***Once upon a time, in the digital realm of the internet, a brave little HTTP request set out on a journey to a Node.js server...***

**Arrival at the Server's Door** <br/>
Our request arrives at port 3000, where the Node.js server is listening. The server's ears perk up as it detects the incoming request.

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  // Request handling will happen here
});
server.listen(3000);
```

**The Gatekeeper**<br/>
The Event Loop,
the tireless gatekeeper of the Node.js kingdom, notices the request. It says, "Ah, a visitor! Let's process this request."

Routing the Request
The event loop looks at the request's URL and method, then directs it to the appropriate route handler.

``` javascript
if (req.url === '/api/data' && req.method === 'GET') {
  handleGetData(req, res);
}
```

**The Middlemen** <br/>
Middleware
Before reaching its final destination, the request passes through a series of middleware functions. These helpful middlemen might check for authentication, log the request, or parse the body.

``` javascript
function authMiddleware(req, res, next) {
  // Check authentication
  next();
}
```

**The Handler** <br/>
Where the Magic Happens
The request finally reaches its destination: the route handler. Here, the real work begins. The handler might need to fetch data from a database or call an external API.

``` javascript
function handleGetData(req, res) {
  // Imagine this is a database query
  db.getData((err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }
    // More processing...
  });
}
```

**The Waiting Room** <br/>
While waiting for the database query to complete, our request's callback patiently sits in the event queue our waiting room. The event loop continues to process other tasks.

**Libuv** <br/>
The Backend Worker
Meanwhile, libuv, the hardworking backend of Node.js, manages the database query. It might use its thread pool for this operation, ensuring it doesn't block the main thread.

**Back to the Event Loop**<br/>
Once the database query is complete, libuv notifies the event loop. The event loop sees the finished task and moves the callback from the event queue to be executed.

**Preparing the Response**<br/>
With data in hand, the handler prepares the response. It formats the data into JSON and sets the appropriate headers.
``` javascript
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
```

The Journey Home
The response is sent back to the client, and the request's journey comes to an end. The event loop closes the connection and gets ready for the next adventure.


### Epilogue: The Never-Ending Story🔄

***The event loop continues its vigilant watch, ready to guide the next request through its journey in the Node.js realm.***

<div style="display: flex; justify-content: space-around; flex-wrap: no-wrap;">
  <div style="text-align: center;">
    <img src="/post/gatekeeper.jpg" alt="The Gatekeeper" style="width: max; height: auto;">
  </div>
  <div style="text-align: center;">
    <img src="/post/middleman.jpg" alt="The Middleman" style="width: max; height: auto;">
  </div>
  <div style="text-align: center;">
    <img src="/post/handler.jpg" alt="The Handler" style="width: max; height: auto;">
  </div>
  <div style="text-align: center;">
    <img src="/post/waiting-room.jpg" alt="The Event Loop" style="width: max; height: auto;">
  </div>
  <div style="text-align: center;">
    <img src="/post/backend-workers.jpg" alt="libuv" style="width: max; height: auto;">
  </div>
    <div style="text-align: center;">
    <img src="/post/infinite-loop.jpg" alt="libuv" style="width: max; height: auto;">
  </div>
</div>

<hr/>
