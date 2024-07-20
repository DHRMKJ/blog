---
title: 'Getting Rusty🦀 But Why?'
description: 'The rust programming language and Why do I even like it?'
pubDate: 'Jan 21 2023'
categories: ['Rust', 'Programming']
---



![WHY RUST](/blog/post/jackie-chan-why.jpg)

**I would use JavaScript/TypeScript or Python for writing servers but node.js isnt the best idea of computation right,
the nodejs architecture [events architecture](/posts/noddy-js) and Python🐍 being a 🐌**

Node.js's event-driven architecture isn't designed for heavy computation, often leading to blocking issues. Meanwhile, Python, our trusty friend, tends to crawl like a snail when it comes to speed and in addition I'm terrified of the memory leaks with C 😭.

## Speed && Concurrency 🔄⚡ 

Working with threads in Python can be fast—very fast—but it often requires careful locking to prevent data races, which are undesirable in certain cases.

Rust has this model of concurrency **fearless concurrency** and it's pair it with the **ownership model**
rust prevents the **data races**, and I mean rust makes the threads dance in harmony without stepping on each other's toes.

And much more than this, rust takes away some abstraction, you wouldnt think about parsing bits, deserializing and serialing you wouldnt think in terms of bits and how performence is affected in a higher level language because it is abstracted away from you.

Ownership is a bit convoluted if coming from conventional programming languages, if you want to learn more about rust I have some [resources](#resources).

### Resources
1. The Rust Programming Book [The Book](https://doc.rust-lang.org/book).
2. Practice building [linked lists](https://rust-unofficial.github.io/too-many-lists) to master ownership.
3. Learn from the best, Jon Gjengset the Karpathy of Rust:
   - [YouTube Channel](https://www.youtube.com/c/jongjengset)
   - Especially [The Crust of Rust](https://www.youtube.com/playlist?list=PLqbS7AVVErFiWDOAVrPt7aYmnuuOLYvOa)
4. Try learning like some legend said on [Twitter](https://x.com/0liviajulianna/status/1552796063949623296).

Shout out to **[Jon gjengset](https://thesquareplanet.com/)**. It's absolutely unbelievable that his content on youtube is free!
<hr/>

