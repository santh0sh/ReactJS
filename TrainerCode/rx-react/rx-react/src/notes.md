What is RxJS?

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects), and operators inspired by Array#extras (map, filter, reduce, every, etc.) to allow handling asynchronous events as collections.

ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

The essential concepts in RxJS which solve async event management are as follows.

Observable: represents the idea of an invokable collection of future values or events.

Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.

Subscription: represents the execution of an Observable; it is primarily useful for cancelling the execution.

Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.

Subject: is the equivalent to an EventEmitter and the only way of multicasting a value or event to multiple Observers.

Schedulers: are centralised dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

What can I use Rx for?
-----------------------
RxJS is perfect for complex asynchronous queries and reactions to events. With RxJS and lodash, it is easy to write clean code in these cases.

Yuse RxS to process and throttle user events and as a result, update the state of the application.

With React, it is great for creating communication between components.

It brings methods that allow a developer to create streams of data and manipulate on these streams. And there are so many options of manipulation or creation so you have a large field to play with (for example you can use it with Websockets).

When it is not cool to use Rx?
------------------------------
The maintenance – is  team experienced with Rx? If not, it might be quite hard for newcomers to learn Rx js, as it has quite a steep learning path.

It is quite hard to debug. The logger sometimes just shows the functions from the depths of the source code, so you need to deep dive into it – or just guess – what went wrong.

Also for some projects, it would be just overkill.

Working with Rxjs:

$ npm install rxjs
$ npm install rxjs-compat
